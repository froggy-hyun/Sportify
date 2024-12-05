// import { useEffect } from 'react';

import * as S from '@/styles/pagesStyles/myPageStyles/myPage.Styled';
import { Location, Divide } from '@/components';

import userProfileIcon from '@/assets/icon/navigation/마이_DeActive.png';
import arrow from '@/assets/icon/etc/arrow/rightArrow_Default.png';
// import { useQueries } from '@/service/queries/useQueries';
// import { myPageUserDateApi } from '@/service/queries';

// import { myInfoState } from '@/recoil/atom/myPage';
// import { useRecoilState } from 'recoil';

const MyPage = () => {
  // const [myUser, setMyUser] = useRecoilState(myInfoState);

  // const { data } = useQueries(
  //   ['myInfoState'], // queryKey
  //   {
  //     myInfoState: myPageUserDateApi,
  //   },
  //   { staleTime: 5 * 60 * 1000, cacheTime: 10 * 60 * 1000 }, // queryOptions
  //   [null]
  // );

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data]);

  return (
    <>
      <Location />

      <S.UserInfoContainer>
        <S.User>
          <S.UserProfileArea>
            <S.UserProfile src={userProfileIcon} />
          </S.UserProfileArea>
          <S.UserInfoArea>
            <S.UserIsDisabled>비장애 이용권</S.UserIsDisabled>
            {/* 장애 여부에 따른 조건부 렌더링 */}
            <S.UserName>홍길동님</S.UserName> {/* 회원 이름 */}
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
