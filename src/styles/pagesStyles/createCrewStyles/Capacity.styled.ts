import styled from 'styled-components';

export const DropdownContainer= styled.div`
  width: 100%;
  position: relative;
  border-radius: 0.8rem;
  height: fit-content;
`;

export const DropdownToggle= styled.div`
  width: 100%;
  height: 4.4rem;
  display: flex;
  border-radius: 0.8rem;
  justify-content: space-between;
  padding: 1.4rem 1.2rem;
  cursor: pointer;
  background-color: var(--grayBG);
  
`;

export const CapacityCount= styled.p`
  color: var(--textC3);
  font-size: 1.4rem;  
  font-weight: 400;
  line-height: normal;
`;

export const ArrowIcon = styled.img<{ isOpen: boolean }>`
  width: 2rem;
  height:  2rem;
  transform: ${({ isOpen }) => (isOpen ? "rotate(-180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
`;


export const DropdownMenu = styled.ul`
  border-radius: 0.8rem;
  margin-top: 1rem;
  width: 100%;
  height: 20rem;
  overflow: scroll;
 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

`;

export const DropdownItem = styled.li`
  color: var(--textC3);
  font-size: 1.4rem;  
  background-color: var(--white);
  padding: 1.4rem 1.2rem;
  width: 100%;
  font-weight: 400;
  height: 4rem;
  line-height: normal;
  cursor: pointer;
  &:hover {
    background-color: var(--grayBG);
  }
`;
