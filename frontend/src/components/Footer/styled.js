import styled from 'styled-components'
import { configBorderColored } from '../../globals/utils'

export const Container = styled.div`
  padding: 2rem;
  ${configBorderColored}

  > i {
    @media (min-width: 490px) {
      display: grid;
      width: 17%;
      max-width: 20%;
      justify-items: end;
    }
  }
  > section {
    display: block;
    @media (min-width: 490px) {
      margin: 7rem auto;
    }
    @media (min-width: 490px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5rem 0;
    }
    @media (min-width: 999px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    > ol {
      padding: 0 0 4rem 0;
      @media (min-width: 490px) {
        padding: 0 3rem;
        &:last-child {
          padding: 0 0 0 3rem;
        }
      }
      > span {
        font-size: 2rem;
        font-weight: 900;
        color: var(--opacity-text);
        line-height: 7rem;
      }

      > li {
        color: var(--color-footer-list-items);
        font-size: 1.7rem;
        line-height: 4rem;
      }
    }
  }
`
