import { newCrewState } from '@/recoil/atom/newCrew';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from '@/styles/pagesStyles/createCrewStyles/Capacity.styled';
import * as K from '@/styles/pagesStyles/createCrewStyles/CreateCrewPage.styled';

import arrowImg from '@/assets/icon/etc/arrow/downArrow_Default.png';
import { Title } from '../ui';

const Capacity = () => {
  const [newCrew, setNewCrew] = useRecoilState(newCrewState);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const capacity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    // 빈공간 클릭시 드롭다운 사라짐
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef]);

  return (
    <K.SelectListContainer>
      <Title title="수용인원을 설정하세요." color={true} />
      <S.DropdownContainer
        ref={selectRef}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <S.DropdownToggle onClick={() => setIsOpen((prev) => !prev)}>
          <S.CapacityCount> {newCrew.capacity}명</S.CapacityCount>

          <S.ArrowIcon isOpen={isOpen} src={arrowImg} alt="열기" />
        </S.DropdownToggle>
        {isOpen && (
          <S.DropdownMenu>
            {capacity.map((num) => (
              <S.DropdownItem
                onClick={() => {
                  setNewCrew((prev) => ({
                    ...prev,
                    capacity: num,
                  }));
                }}
              >
                {num}명
              </S.DropdownItem>
            ))}
          </S.DropdownMenu>
        )}
      </S.DropdownContainer>
    </K.SelectListContainer>
  );
};

export default Capacity;
