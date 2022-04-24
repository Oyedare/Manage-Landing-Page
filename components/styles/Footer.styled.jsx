import styled from 'styled-components';
export const StyledFooter = styled.div`
  background-color: var(--footer-bg);
  @media (max-width: ${({theme})=>theme.mobile}){
   width: 40rem;
  margin: auto;
  }
  p{
    text-align: right;
    margin-top: -2.5rem;
    color: #fff;
    @media (max-width: ${({theme})=>theme.mobile}){
      text-align: center;
      margin: 2rem 0;
      font-size: 1.7rem;
    }
  }
`
export const Logo = styled.img`
  width: 100%;
  max-width: 100%;
  margin-bottom: 4rem;
  @media (max-width: ${({theme})=>theme.mobile}){
  margin: auto;
  width: 80%;

}
`
export const FooterLeft = styled.div`
  width: 30%;
  @media (max-width: ${({theme})=>theme.mobile}){
  display: flex;
  flex-direction: column-reverse;
  margin-right: 0;
  width: 80%;
  justify-content: center;
}
`
export const FooterCenter = styled.div`
@media (max-width: ${({theme})=>theme.mobile}){
 width: 90%; 
 margin-bottom: 2rem;
}
`

export const FooterRight = styled.div`

@media (max-width: ${({theme})=>theme.mobile}){
 width: 100%; 
 margin-bottom: 4rem;
}
`

export const FooterForm = styled.div`
text-align: center;
input{
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  margin-right: 1rem;
  

  @media (max-width: ${({theme})=>theme.mobile}){
  font-size: 2rem;
  margin-top: 2rem;
}

  ::placeholder{
    font-size: 1rem;
    @media (max-width: ${({theme})=>theme.mobile}){
      font-size: 1.7rem;
    }
  }
  
}


`