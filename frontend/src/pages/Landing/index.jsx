import React from 'react';
import { Container } from './styled';
import Warning from '../../components/Warning';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Section from '../../components/Section';
import Aside from '../../components/Aside';
import Companies from '../../components/Companies';
import Footer from '../../components/Footer';

export default function Landing() {
  return (
    <Container>
      <section>
        <Warning />
      </section>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <section>
        <Section />
      </section>
      <aside>
        <Aside />
      </aside>
      <section>
        <Companies />
      </section>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}
