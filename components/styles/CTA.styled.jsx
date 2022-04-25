import styled from 'styled-components';

export const StyledCTA = styled.div`
  background-color: var(--btn-bg);
  background-image:   url(../images/bg-simplify-section-desktop.svg);
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: ${({theme})=>theme.mobile}){
      width: 40rem;
      text-align: center;
    }

  h1{
    color: #fff;
    font-size: 2.1rem;
    width: 50%;

    @media (max-width: ${({theme})=>theme.mobile}){
      font-size: 4.8rem;
      width: 100%;
      margin-bottom: 4rem;
    }
  }
`