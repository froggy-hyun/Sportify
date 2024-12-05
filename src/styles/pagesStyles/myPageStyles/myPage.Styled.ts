import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
`;

export const User = styled.div`
  width: 100%;
  display: flex;

  margin-bottom: 2.8rem;
`;

export const UserProfileArea = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: var(--grayBG);
  padding: 12px;

  border-radius: 60px;
`;

export const UserProfile = styled.img`
  width: 4rem;
  height: auto;
  object-fit: cover;
  display: block;
`;

export const UserInfoArea = styled.div`
  margin-left: 16px;
`;

export const UserName = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: var(--textC3);

  padding: 4px 0px 0px 4px;
`;

export const UserIsDisabled = styled.p`
  height: fit-content;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--white);

  padding: 4px 12px;
  margin-left: auto;
  background-color: var(--brandColor);
  border-radius: 50px;
`;

export const UserInfoManage = styled.div`
  width: 100%;
`;

export const InfoManage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:16px;

  padding:2rem 0px 0px 1.6rem;
`;

export const ModifyInfo = styled.p`
  font-size:1.4rem;
  font-weight: 400;
  color: var(--textC3);
`;

export const Logout = styled.p`
  font-size:1.4rem;
  font-weight: 400;
  color: var(--textC3);
`;

export const MyPageTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--textC3);
`;

export const UserUtilServiceContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
`;

export const UserServiceArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0rem;

  &:first-child {
    padding-top: 0;
  }

  border-bottom: 1px solid var(--grayBG);
`;

export const Arrow = styled.img`
  width: 16px;
  height: auto;
  object-fit: cover;
`;

export const Version = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--textC8);

  margin-top: 16px;
  text-align: right;
`;
