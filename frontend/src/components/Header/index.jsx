import React, { useContext } from 'react';
import npmDark from '../../assets/images/npmDark.png';
import { Container } from './styled';
import { LandingContext } from '../../contexts/LandingContext';

export default function Header() {
  const context = useContext(LandingContext);
  const { search, setSearch } = context;

  return (
    <Container>
      <nav>
        <ol>
          <li>❤ Neglected Pizza Money</li>
        </ol>
        <ol>
          <li>Products</li>
          <li>Pricing</li>
          <li>Documentation</li>
          <li>Community</li>
        </ol>
      </nav>
      <section>
        <figure>
          <img src={npmDark} alt="Logotipo NPM" />
        </figure>

        <div>
          <button type="button">Sign Up</button>
          <button type="button">Sign In</button>
        </div>
        <form>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            name="search"
            id="search"
            placeholder="Search packages"
          />
          <button type="button">
            <strong>Search</strong>
          </button>
        </form>
      </section>
    </Container>
  );
}
