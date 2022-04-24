import styled from 'styled-components';

export const StyledAbout = styled.div`
  
  @media (max-width: ${({theme})=>theme.mobile}){
    width: 40rem;
  }
`

export const AboutFlex = styled.div`
 display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
  @media (max-width: ${({theme})=>theme.mobile}){
    flex-direction: column;
  }
`

export const AboutTextFlex = styled.div`
  flex: 1;
  
  @media (max-width: ${({theme})=>theme.mobile}){
    text-align: center;
  }
  h1{
      color: #000;
      font-size: 3rem;
      margin-bottom: 3rem;
      font-size: 2.25rem;
      font-weight: 700;
      width: 100%;
      
  @media (max-width: ${({theme})=>theme.mobile}){
    font-size: 3.5rem;
  }
  }
  p{
    font-size: 1rem;
    line-height: 30px;
    margin-bottom: 2.5rem;
    width: 90%;
    @media (max-width: ${({theme})=>theme.mobile}){
    font-size: 1.5rem;
    line-height: 40px;
    width: 100%;
  }
  }
`
