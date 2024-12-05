import { useEffect } from 'react';
import * as S from '@/styles/pagesStyles/myPageStyles/myPage.Styled';
import { Location, Divide } from '@/components';

import userProfileIcon from '@/assets/icon/navigation/마이_DeActive.png';
import arrow from '@/assets/icon/etc/arrow/rightArrow_Default.png';
import { useQuery } from '@tanstack/react-query';
import { myPageUserDateApi } from '@/service/queries';
import { useRecoilState } from 'recoil';
import { myInfoState } from '@/recoil/atom/myPage';

const MyPage = () => {
  const [myUser, setMyUser] = useRecoilState(myInfoState);

  const { isLoading, data, isError } = useQuery({
    queryKey: ['myPageUser'],
    queryFn: () => myPageUserDateApi(),
  });

  useEffect(() => {
    if (data) {
      const newData = data.data.data;
      setMyUser(newData);
    }
  }, [data]);

  return (
    <>
      <Location />

      <S.UserInfoContainer>
        <S.User>
          <S.UserProfileArea>
            <S.UserProfile src={userProfileIcon} />
          </S.UserProfileArea>
          <S.UserInfoArea>
            <S.UserIsDisabled>
              {!myUser.disabled ? '비장애 이용권' : '장애 이용권'}
            </S.UserIsDisabled>
            <S.UserName>{`${myUser.name}님`}</S.UserName> {/* 회원 이름 */}
          </S.UserInfoArea>
        </S.User>

        <S.UserInfoManage>
          <S.MyPageTitle>회원 정보 관리</S.MyPageTitle>

          <S.InfoManage>
            <S.ModifyInfo>회원정보 수정</S.ModifyInfo>
            <S.Logout>로그아웃</S.Logout> {/* 로그아웃 */}
          </S.InfoManage>
        </S.UserInfoManage>
      </S.UserInfoContainer>

      <Divide />

      <S.UserUtilServiceContainer>
        <S.UserServiceArea>
          <S.MyPageTitle>현재 활동중인 이용권</S.MyPageTitle>
          <S.Arrow src={arrow} />
        </S.UserServiceArea>
        <S.UserServiceArea>
          <S.MyPageTitle>과거 이용권</S.MyPageTitle>
          <S.Arrow src={arrow} />
        </S.UserServiceArea>
        <S.UserServiceArea>
          <S.MyPageTitle>고객 센터</S.MyPageTitle>
          <S.Arrow src={arrow} />
        </S.UserServiceArea>

        <S.Version>V.0.0.1</S.Version>
      </S.UserUtilServiceContainer>
    </>
  );
};

export default MyPage;
