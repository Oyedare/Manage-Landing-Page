import styled from 'styled-components';

export const StyledSocialIcons = styled.div`
  color: #fff;
 display: flex;
 justify-content: space-between;
 align-items: center;
 
 @media (max-width: ${({theme})=>theme.mobile}){
 margin-bottom: 5rem;
}

 >* {
   font-size: 2.5rem;
   cursor: pointer;
   @media (max-width: ${({theme})=>theme.mobile}){
 font-size: 3.5rem;
}
 }
`