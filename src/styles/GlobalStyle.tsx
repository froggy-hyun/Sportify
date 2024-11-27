import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    margin: 6.4rem 0 8.6rem 0;
    // BrandColor
    --brandColor:#0096C7;
    
    --funcC1: #FF6F00;
    --funcC2: #FFA500;
    --funcC3: #2BAE66;

    // DefaultColor
    --grayBG: #F5F6FA;
    --black: #000000;
    --white: #ffffff;

    //Text
    --textC3: #333333;
    --textC8: #888888;
}

* {
    
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    margin:0;
    padding:0;
	box-sizing: border-box;
    text-decoration: none;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big,button, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video,input {
	border: 0;
	vertical-align: baseline;
}

html {
    font-size: 62.5%; // 10px가 1rem
        /* @media (max-width: 768px) { // 태블릿
            font-size: 50%; // 8px
        } */

        /* @media (max-width: 480px) { // 모바일
            font-size: 25%; // 4px
        } */
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
    background-color: var( --white) ;
}

h1 {
    color: var(--textC3);
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
button {
	border-radius: 0.8rem;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}


.scroll-locked {
  overflow: hidden !important; // 강제적으로 스크롤을 숨김 
  height: 100%; // 스크롤 차단 시 높이를 고정 
}



`;

export default GlobalStyle;
