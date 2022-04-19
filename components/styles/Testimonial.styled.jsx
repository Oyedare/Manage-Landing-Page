import styled from 'styled-components';

export const StyledTestimomial = styled.div`
text-align: center;
  h1{
    color: #000;
    margin-bottom: 5rem;
    font-size: 2.5rem;
  }
`

export const StyledTestimonialCard  = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`
export const StyledTestimonialCardItem  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--card-bg);
  margin-left: 2.5rem;
  padding: 2rem 2rem;
  border-radius: 5px;

  h2{
    color: #000;
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  p{
    font-size: .8rem;
    margin-top: 2rem;
    line-height: 25px;
    text-align: center;
  }

  img{
    width: 4rem;
    margin-top: -3.5rem;
  }
`