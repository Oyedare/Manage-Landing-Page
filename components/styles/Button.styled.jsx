import styled from 'styled-components';

export const Button  = styled.button`
  background-color: var(--btn-bg);
  border: none;
  outline: none;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  
  :hover{
    opacity: 0.7;
  }

  @media (max-width: ${({theme})=>theme.mobile}){
    font-size: 1.6rem;
  }
`
export const ButtonContainer  = styled.div`
@media (max-width: ${({theme})=>theme.mobile}){
 display: none;
}
`

export const AboutButton = styled.button`
  background-color: var(--btn-bg);
  border: none;
  outline: none;
  color: #fff;
  padding: .5rem 1rem;
  border-radius: 50px;
  font-size: 1rem;
  text-align: center;
  height: 100%;
  @media (max-width: ${({theme})=>theme.mobile}){
    font-size: 1.5rem;
    padding: 1.1rem 1.5rem;
  }
`
export const CTAButton  = styled.button`
  background-color: #fff;
  border: none;
  outline: none;
  color: var(--btn-bg);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;


  :hover{
    background-color: var(--btn-cta-hover);
  }
  @media (max-width: ${({theme})=>theme.mobile}){
    font-size: 1.6rem;
  }
`