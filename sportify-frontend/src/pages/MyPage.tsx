import { useEffect } from 'react';
import * as S from '@/styles/pagesStyles/myPageStyles/myPage.Styled';
import { Location, Divide, Button } from '@/components';

import userProfileIcon from '@/assets/icon/navigation/마이_DeActive.png';
import arrow from '@/assets/icon/etc/arrow/rightArrow_Default.png';
import { useQuery } from '@tanstack/react-query';
import { myPageUserDateApi } from '@/service/queries';
import { useRecoilState } from 'recoil';
import { myInfoState } from '@/recoil/atom/myPage';
import { useGenericMutation } from '@/service/mutations/customMutation';
import { logoutApi } from '@/service/mutations';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const [myUser, setMyUser] = useRecoilState(myInfoState);
  const navigate = useNavigate();
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

  const onLogoutSuccess = () => {
    alert('로그아웃 되었습니다');
    const email = localStorage.getItem('email');
    localStorage.removeItem('accessToken');
    localStorage.removeItem(`currentLocation${email}`);
    localStorage.removeItem('email');
    sessionStorage.removeItem('homeModal');
    localStorage.removeItem('disabled');
    navigate('/login');
  };

  const onLogoutError = () => {
    alert('로그아웃에 실패하였습니다');
  };

  const { mutation: logoutMutation } = useGenericMutation({
    mutationFn: logoutApi,
    onSuccessCb: onLogoutSuccess,
    onErrorCb: onLogoutError,
  });

  const handleLogout = () => {
    const userConfirmed = window.confirm('로그아웃하시겠습니까?');
    const token = localStorage.getItem('accessToken');
    if (token && userConfirmed) {
      logoutMutation.mutate(token);
    }
  };

  return (
    <S.EntireContainer>
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

        <Button title="로그아웃" onClick={handleLogout}/>
      </S.UserInfoContainer>

      <Divide />

      <S.UserUtilServiceContainer>
        <S.LinkBtn to={`https://github.com/TUK-SPORTIFY`}
          target="_blank">
          <S.MyPageTitle>Sportify GitHub</S.MyPageTitle>
          <S.Arrow src={arrow} />
        </S.LinkBtn>

        <S.Version>V.0.0.1</S.Version>
      </S.UserUtilServiceContainer>
    </S.EntireContainer>
  );
};

export default MyPage;
