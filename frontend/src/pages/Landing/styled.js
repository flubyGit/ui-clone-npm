import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  > section:first-child {
    border-bottom: 1px solid red;
    border-image: linear-gradient(53deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
    border-bottom-width: 10px;
  }
`;
