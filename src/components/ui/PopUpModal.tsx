import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface PopUpModalProps {
  children: React.ReactNode;
  onClose: () => void;
  page: 'main' | 'crew' | 'address';
}

const PopUpModal = ({ children, onClose, page }: PopUpModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        // 이벤트가 발생한 노드가 모달 컴포넌트 내부에 존재하지 않는다면 close
        onClose();
      }
    };

    // 이벤트 리스너를 document 전체에 붙여줌
    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [onClose]);

  return (
    <Background>
      <Modal $page={page} ref={modalRef}>
        {children}
      </Modal>
    </Background>
  );
};

export default PopUpModal;

export const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled.div<{ $page: 'main' | 'crew' | 'address' }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: var(--white);
  bottom: 0;

  width: 100%;
  z-index: 200;
  /* height: ${({ $page }) => $page === 'main' ? '31.5rem' : $page === 'crew' ? '62rem' : '31.5rem'}; */
  flex-shrink: 0;
  border-radius: 2rem 2rem 0 0;
  padding: 3.2rem 2rem 4rem 2rem;
`;
