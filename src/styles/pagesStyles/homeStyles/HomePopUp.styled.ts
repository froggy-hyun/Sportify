import styled from 'styled-components';

export const Title = styled.p`
  font-size: 2.0rem;
  margin-bottom: 8px;
  font-weight: 700;
  color: var(--textC3);
`;

export const InfoContainer = styled.div`
  margin: 2.4rem 0 4rem 0;
`;

export const Info = styled.p`
  color:var(--textC3);
  font-weight: 400;
  font-size: 1.6rem;
  display: flex;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CheckContainer = styled.div`
  display: flex;
  margin-top: 2.4rem;
  align-items: center;
`;

export const CheckExplain = styled.p`
  color: var(--textC3);
  font-size: 1.4rem;
`;

export const CheckBox = styled.input`
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  margin-right: 8px;
`;

export const Highlights = styled.span`
  font-weight: bold;
  color: var(--brandColor);
`;
