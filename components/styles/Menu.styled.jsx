import styled from 'styled-components';

export const StyledMenu = styled.div`
  @media (max-width: ${({theme})=>theme.mobile}){
  display: flex;
  flex-direction: column;
}
`
export const MenuContainer = styled.div`
@media (max-width: ${({theme})=>theme.mobile}){
  display: none;
}
`

export const StyledLink = styled.a`
  margin-right: 2rem;
   color: #000;

  :hover{
    color: var(--text-color);
  }

  @media (max-width: ${({theme})=>theme.mobile}){
    margin: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
  }
`
export const StyledFooterMenu = styled.div`
  display: flex;
  @media (max-width: ${({theme})=>theme.mobile}){
    justify-content: space-between;
}
`

export const StyledFooterMenuItem = styled.div`
display: flex;
flex-direction: column;
margin-right: 8rem;
@media (max-width: ${({theme})=>theme.mobile}){
 margin-right: 0;
}
`
export const StyledFooterLink = styled.a`
  padding-bottom: 1.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;


  :hover{
    color: var(--btn-bg);
  }

  @media (max-width: ${({theme})=>theme.mobile}){
  font-size: 1.5rem;
}
`
export const MobileMenu = styled.div`
display: none;

@media (max-width: ${({theme})=>theme.mobile}){
  display: block;
} 
`
export const MobileMenuContainer = styled.div`
background-color: #fff;
filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07));
color: #000;
position: absolute;
top: 15%;
left: 10%;
width:80%;
`

export const MobileMenuLinks = styled.div``