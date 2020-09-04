import styled from 'styled-components'
import { mobileDisplayCenter } from '../../globals/utils'
export const Container = styled.div`
  ${mobileDisplayCenter};
  padding: 2rem;
  border-bottom: 1px solid var(--hr);
  > h2 {
    color: var(--opacity-text);
    margin-bottom: 2rem;
    line-height: 1.3em;

    @media (min-width: 490px) {
      margin: 3rem 0;
    }

    @media (min-width: 999px) {
      width: 48%;
      font-size: 3.3rem;
    }
  }
  > figure img {
    width: 100%;

    @media (min-width: 999px) {
      width: 50%;
    }
  }
`
