import styled from 'styled-components';

export const StyledHeader = styled.div`
  /* background-color: red; */
  @media (max-width: ${({theme})=>theme.mobile}){
  width: 40rem;
  position: relative;
}
`
export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
font-size: 1rem;
margin-bottom: 3rem;

@media (max-width: ${({theme})=>theme.mobile}){
  
}

`

export const Logo = styled.img`
  @media (max-width: ${({theme})=>theme.mobile}){
 width: 40%; 
}
`
export const Image = styled.img`

`