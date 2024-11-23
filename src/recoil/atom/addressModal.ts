import { atom } from 'recoil';

export const addressModalState = atom<boolean>({
  key: 'addressModal',
  default: false,
  effects: [
    ({ onSet }) => {
      const html = document.querySelector('html');
      onSet((isOpen) => {
        if (isOpen) {
          html?.classList.add('scroll-locked');
        } else {
          html?.classList.remove('scroll-locked');
        }
      });
    },
  ],
});
