import styled from 'styled-components';
export const StyledFooter = styled.div`
  background-color: var(--footer-bg);
`
export const Logo = styled.img`
  width: 70%;
  max-width: 100%;
  margin-bottom: 3rem;
`
export const FooterLeft = styled.div`
  margin-right: 5rem;
  width: 25%;
`
export const FooterCenter = styled.div`
/* background-color: red; */
width: 45%;
`

export const FooterRight = styled.div`
width: 35%;
p{
  color: #fff;
}
`

export const FooterForm = styled.div`
margin-bottom: 4rem;
input{
  border: none;
  outline: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  margin-right: 1rem;
  /* font-size: 1rem; */

  ::placeholder{
    font-size: 1rem;
  }
}

`