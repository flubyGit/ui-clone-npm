import React from 'react';
import { Container } from './styled';
import ball from '../../assets/images/ball.png';

export default function Section() {
  return (
    <Container>
      <figure>
        <img src={ball} alt="Imagem ilustrativa" />
      </figure>
      <h2>Bring the best of open source to you, your team, and your company</h2>
      <p>
        Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than one million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.
      </p>
    </Container>
  );
}
