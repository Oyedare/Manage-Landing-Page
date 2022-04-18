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
`