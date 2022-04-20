import styled from 'styled-components';

export const StyledMenu = styled.div`
  
`
export const StyledLink = styled.a`
  margin-right: 2rem;
   color: #000;

  :hover{
    color: var(--text-color);
  }
`
export const StyledFooterMenu = styled.div`
  display: flex;
`

export const StyledFooterMenuItem = styled.div`
display: flex;
flex-direction: column;
margin-right: 8rem;
`
export const StyledFooterLink = styled.a`
  padding-bottom: 1rem;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;


  :hover{
    color: var(--btn-bg);
  }
`