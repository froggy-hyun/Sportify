import { atom } from 'recoil';
export const addressModealState = atom<boolean>({
  key: 'addressModeal',
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
