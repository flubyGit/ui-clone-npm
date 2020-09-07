import styled from 'styled-components';

export const Container = styled.div`
  background: var(--gray);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 1rem;
  @media (min-width: 1000px) and (max-width: 1400px) {
    height: 10vh;
  }

  > span {
    font-size: 2rem;
    text-decoration: underline;
    padding: 0 2.3rem;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    padding: 0.3rem;
    > figure {
      cursor: pointer;
      @media (min-width: 1000px) and (max-width: 1400px) {
        height: 3vh;
      }
    }
    > i:first-child {
      margin: 2rem 0 0 0;
    }
  }
`;
