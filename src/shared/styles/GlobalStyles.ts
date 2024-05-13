import { createGlobalStyle } from 'styled-components'
import PretendardRegular from '../../assets/fonts/Pretendard-Regular.subset.woff2'
import PretendardBold from '../../assets/fonts/Pretendard-Bold.subset.woff2'
import PretendardExtraBold from '../../assets/fonts/Pretendard-ExtraBold.subset.woff2'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-style: normal;
    src:
      local('Pretendard'),
      url(${PretendardRegular}) format('woff2');
  }
  
  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-style: normal;
    src:
      local('Pretendard'),
      url(${PretendardBold}) format('woff2');
  }

  @font-face {
      font-family: "Pretendard";
      font-weight: 800;
      font-style: normal;
      src:
              local('Pretendard'),
              url(${PretendardExtraBold}) format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    &::-webkit-scrollbar { 
      display: none;
      width: 0;
      height: 0;
      background: transparent;
    }
  }
  *,
  :after,
  :before {
    flex-shrink: 0;
    box-sizing: border-box;
  }
  :root {
    cursor: default;

    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-tap-highlight-color: transparent;
  }
  button {
    cursor: pointer;
    background: none;
    border: 0;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  ol, ul, li { 
    list-style: none;
  }

  body {
    font-family: 'Pretendard';
  }
  h1 {
      font-weight: 800;
      font-size: 2em;
  }
  h2 {
      font-weight: 700;
      font-size: 1.5em;
  }
  h3 {
      font-weight: 700;
      font-size: 1.2em;
  }
  b, strong {
      font-weight: 700;
  }
`

export default GlobalStyles
