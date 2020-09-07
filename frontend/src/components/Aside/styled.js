import styled from 'styled-components';
import { mobileDisplayCenter } from '../../globals/utils';
import background from '../../assets/images/bg2.png';

export const Container = styled.div`
  ${mobileDisplayCenter};
  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 9rem 2rem;
  color: #fff;
  @media (min-width: 1000px) and (max-width: 1400px) {
    padding: 9rem 13rem;
  }
  > h2 {
    font-size: 2.2rem;
    font-family: var(--font-primary);
    margin-bottom: 2rem;
    @media (min-width: 490px) {
      font-size: 3rem;
    }
  }
  > p {
    font-family: var(--font-secondary);
    font-weight: 2.24rem;
    font-size: 1.66rem;
    line-height: 2.7rem;

    @media (min-width: 999px) {
      width: 50%;
      font-size: 1.6rem;
      line-height: 2.7rem;
    }
  }
`;
