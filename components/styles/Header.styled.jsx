import styled from 'styled-components';

export const StyledHeader = styled.div`
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
font-size: .9rem;
margin-bottom: 3rem;

`

export const Logo = styled.img`
  @media (max-width: ${({theme})=>theme.mobile}){
 width: 40%; 
}
`
export const Image = styled.img`
width: 50%;
@media (max-width: ${({theme})=>theme.mobile}){
  width: 100%;
}
`