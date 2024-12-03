import { atom } from 'recoil';

export const modalState = atom<boolean>({
  key: 'modal',
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
