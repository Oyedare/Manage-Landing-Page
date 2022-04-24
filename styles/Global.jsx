import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

 
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --font-family:  'Be Vietnam Pro', sans-serif;
    --btn-bg: hsl(12, 88%, 59%); 
    --btn-hover: hsl(13, 100%, 96%);
    --text-color: hsl(227, 12%, 61%);
    --footer-bg: hsl(233, 12%, 13%);
    --card-bg:  hsl(0, 0%, 98%);
    --btn-cta-hover: hsl(228, 39%, 23%); 
  }
  body{ 
    font-size: 16px;
    font-family: var(--font-family);
    color: var(--text-color);
    background-image: url(../images/bg-tablet-pattern.svg);
    background-repeat: no-repeat;
    background-size: 850px;
    background-position: 80% -20%;

    @media (max-width: ${({theme})=>theme.mobile}){
      background-position: -15% -2%;
    }
  }
  img{
    max-width: 100%;
  }
  p{
    font-weight: 400;
  }
  h1{
    font-weight: 700;
  }
`
export default GlobalStyles;