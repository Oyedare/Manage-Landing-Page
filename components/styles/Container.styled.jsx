import styled from 'styled-components';

export const Container = styled.div`
  width: 68.75rem;
  max-width: 100%;
  padding: 2rem 1.5rem;
  margin: 0 auto;

  @media (max-width: ${({theme})=>theme.mobile}){
  /* width: 500rem;
  background-color: blue; */
    padding: 3rem 2.5rem;
}
`