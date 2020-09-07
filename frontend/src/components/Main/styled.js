import styled from 'styled-components';
import background from '../../assets/images/bg.png';
import { mobileDisplayCenter } from '../../globals/utils';

export const Container = styled.div`
  background-image: url(${background});
  ${mobileDisplayCenter}
  padding: 5em 2rem;
  color: #fff;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 999px) {
    padding: 5em 23rem;
  }
  @media (min-width: 1000px) and (max-width: 1400px) {
    padding: 5em 36rem;
  }

  > h1 {
    font-size: xxx-large;
    font-family: var(--font-primary);
    font-weight: 900;
    line-height: 1.25;
    @media (min-width: 490px) {
      font-size: 8rem;
    }
    @media (min-width: 999px) {
      font-size: 7.5rem;
    }
  }
  > h3 {
    font-size: 2.3rem;
    line-height: 3rem;

    @media (min-width: 999px) {
      font-size: 3.3rem;
      line-height: 4rem;
    }
  }
  > p {
    font-family: var(--font-secondary);
    font-size: 1.7rem;
    line-height: 3rem;
    margin: 4rem 0;
    @media (min-width: 490px) {
      line-height: 2.4rem;
    }
    @media (min-width: 999px) {
      font-size: 1.6rem;
      margin-bottom: 10rem;
    }
  }
  > div {
    @media (min-width: 490px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 9rem;
    }
    > button {
      padding: 2rem;
      width: 100%;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      font-family: var(--font-primary);
      font-size: 1.6rem;
      color: #fff;

      &:nth-of-type(odd) {
        background: var(--btn-sign-up-bg);
        border-bottom: 6px solid var(--border-btn-sign-up);
        margin-bottom: 2rem;
      }
      &:nth-of-type(even) {
        background: var(--btn-learn-about-bg);
        border-bottom: 6px solid var(--border-btn-learn-about);
        @media (min-width: 490px) {
          height: 78%;
          max-height: 78%;
        }
      }
    }
  }
`;
