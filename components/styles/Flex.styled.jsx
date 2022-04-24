import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({theme})=>theme.mobile}){
  flex-direction: column-reverse;
}
`

export const HeaderFlex = styled.div`
  flex: 1;
  
  @media (max-width: ${({theme})=>theme.mobile}){
    text-align: center;
  }
  h1{
      color: #000;
      font-size: 3rem;
      margin-bottom: 3rem;
      @media (max-width: ${({theme})=>theme.mobile}){
        font-size: 3.5rem;
      }
      }
  p{
    font-size: 1rem;
    line-height: 25px;
    margin-bottom: 2.5rem;
    
    @media (max-width: ${({theme})=>theme.mobile}){
      font-size: 1.6rem;
      line-height: 40px;
    }
    }
`

export const CTAFlex = styled.div`
   display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({theme})=>theme.mobile}){
    flex-direction: column;
    padding: 6rem 1.5rem;
}
`
export const FooterFlex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: ${({theme})=>theme.mobile}){
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const FooterFlexLeftCenter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  @media (max-width: ${({theme})=>theme.mobile}){
    flex-direction: column-reverse;
    width: 100%;
    align-items: center;
  }
`

