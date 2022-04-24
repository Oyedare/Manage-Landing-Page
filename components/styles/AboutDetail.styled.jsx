import styled from 'styled-components';

export const StyledAboutDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: .8rem;
  margin-left: 4rem;

  @media (max-width: ${({theme})=>theme.mobile}){
    width: 100%;
    margin-left: 0;
  }
`

export const AboutDetailFlex = styled.div`
  display: flex;
  margin-bottom: 4rem; 
 `

export const AboutText = styled.div`
  margin-left: 2rem;
  @media (max-width: ${({theme})=>theme.mobile}){
    margin-left: -3.5rem;
    z-index: -1;
  }

  h1{
    color: #000;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 700;

    @media (max-width: ${({theme})=>theme.mobile}){
      background-color: #fce4e8;
      padding: 1rem 4rem;
      font-size: 1.5rem;
      border-top-left-radius: 1.5rem;
      border-bottom-left-radius: 1.5rem;
    }
  }
  p{
    font-size: 1rem;
    line-height: 25px;

    @media (max-width: ${({theme})=>theme.mobile}){
      font-size: 1.5rem;
      line-height: 40px;
    }
  }    
`