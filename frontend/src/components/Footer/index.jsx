import React from 'react';
import { ImNpm } from 'react-icons/im';
import { Container } from './styled';

export default function Footer() {
  return (
    <Container>
      {window.screen.width < 999 && (
      <i>
        {' '}
        <ImNpm size={44} color="#333" />
      </i>
      )}
      <section>
        <ol>
          <span>Support</span>
          <li>Help</li>
          <li>Community</li>
          <li>Advisories</li>
          <li>Status</li>
          <li>Contact npm</li>
        </ol>
        <ol>
          <span>Company</span>

          <li>About</li>
          <li>Blog</li>
          <li>Press</li>
        </ol>
        <ol>
          <span>Terms & Policies</span>

          <li>Policies</li>
          <li>Terms of Use</li>
          <li>Code of Conduct</li>
          <li>Privacy</li>
        </ol>
      </section>
    </Container>
  );
}
