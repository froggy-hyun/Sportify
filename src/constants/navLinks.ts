const defaultURL = "../assets/icon/navigation/"
const images = import.meta.glob<{ default: string }>( '../assets/icon/navigation/*.png', { eager: true });

interface  NavLinks {
  name: string,
  path: string,
  activeImg:  string,
  deActiveImg :string,
}


export const navLinks :  NavLinks[] = [
  {
    name: "홈",
    path: '/',
    activeImg:  images[defaultURL+"메인_Active.png"]?.default,
    deActiveImg :images[defaultURL+"메인_DeActive.png"]?.default,
  },
  {
      name: "이용권",
      path: '/ticket',
      activeImg:  images[defaultURL+"이용권_Active.png"]?.default,
      deActiveImg :images[defaultURL+"이용권_DeActive.png"]?.default,

  },
  {
      name: "이웃",
      path: '/neighbor',
      activeImg:  images[defaultURL+"이웃_Active.png"]?.default,
      deActiveImg :images[defaultURL+"이웃_DeActive.png"]?.default,
  },
  {
      name: "마이",
      path: '/my',
      activeImg:  images[defaultURL+"마이_Active.png"]?.default,
      deActiveImg :images[defaultURL+"마이_DeActive.png"]?.default,
      
  },
]