import React from 'react';
import { Container } from './styled';

export default function Main() {
  return (
    <Container>
      <h1>Build amazing things</h1>
      <p>
        We&apos;re npm, Inc., the company behind Node package manager, the npm Registry, and npm CLI. We offer those to the
        community for free, but our day job is building and selling useful tools for developers like you.
      </p>
      <h3>Take your JavaScript development up a notch</h3>
      <p>
        Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with
        features like private packages.
      </p>
      <div>

        <button type="button">Sign up for free</button>
        <button type="button">Learn about pro</button>
      </div>
    </Container>
  );
}
