import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&display=swap');
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
    background-size: 800px;
    background-position: right 20% top 200%;
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