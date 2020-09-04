import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  text-align: center;
  color: var(--opacity-text);
  padding: 2.1rem;
  @media (min-width: 490px) {
    padding: 3em 1em 7em 1em;
  }
  @media (min-width: 999px) {
    padding: 3em 15em 7em 15em;
  }
  @media (min-width: 1000px) and (max-width: 1400px) {
    padding: 3em 22em 7em 22em;
  }
  > figure img {
    width: 45%;
  }

  > h2 {
    font-family: var(--font-primary);
    margin-bottom: 3rem;

    @media (min-width: 999px) {
      font-size: 3.8rem;
      width: 100%;
      max-width: 100%;
    }
  }
  > p {
    font-size: 1em;
    font-family: var(--font-secondary);
    line-height: 2.5rem;

    @media (min-width: 999px) {
      width: 100%;
      max-width: 100%;
    }
  }
`
