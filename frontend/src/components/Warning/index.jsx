import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { Container } from './styled';
import npmWhite from '../../assets/images/whiteNPM.png';

export default function Warning() {
  return (
    <Container>
      <figure>
        <img src={npmWhite} alt="Logotipo NPM" />
      </figure>
      <span>
        <strong>npm </strong>
        is a now a part of
        <strong> GitHub</strong>
      </span>
      <i>
        <GoMarkGithub size={30} color="#fff" />
      </i>
    </Container>
  );
}
