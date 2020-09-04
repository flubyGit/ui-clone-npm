import styled from 'styled-components'
import search from '../../assets/images/search.png'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  > nav {
    padding: 1rem;
    display: flex;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 600px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
    }
    > ol:first-child {
      > li {
        cursor: pointer;

        &:hover {
          opacity: 0.5;
        }
        @media (min-width: 999px) {
          margin-left: 20px;
        }
        @media (min-width: 1000px) and (max-width: 1400px) {
          margin-left: 0;
        }
      }
    }
    > ol + ol {
      display: flex;
      font-size: 12px;
      font-weight: 700;
      justify-content: space-evenly;

      color: #000;
      font-family: var(--font-primary);
      letter-spacing: 0.015625em;
      @media (min-width: 490px) {
        align-items: center;
      }
      @media (min-width: 500px) {
        width: 65%;
        justify-content: flex-end;
      }
      @media (min-width: 1000px) and (max-width: 1400px) {
        width: 80%;
      }
      > li {
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
        @media (min-width: 320px) and (max-width: 499px) {
          display: none;
        }
        @media (min-width: 500px) {
          margin: 0 10px;
          font-size: 1.333rem;
        }
      }
    }
  }
  > section {
    padding: 0 2rem;
    border: 1px solid var(--hr);

    @media (min-width: 430px) {
      display: grid;
      grid-template-areas: 'npm form
       text
      ';
    }
    @media (min-width: 1000px) and (max-width: 1400px) {
      grid-template-columns: 9% 70%;
    }
    > i {
      cursor: pointer;
      @media (min-width: 470px) {
        grid-area: npm;
      }
      @media (min-width: 1000px) and (max-width: 1400px) {
        margin-top: 20px;
        gap: 2px 0;
      }
    }
    > div {
      padding: 0 2rem;

      @media (min-width: 430px) {
        justify-self: end;
        align-self: center;
        padding: 0;
      }
      @media (min-width: 470px) {
        grid-area: text;
      }
      @media (min-width: 1000px) and (max-width: 1400px) {
        margin-top: 10px;
      }
    }
    > div button {
      cursor: pointer;
      padding: 1.222rem 3rem;
      font-family: var(--font-primary);
      border: none;
      background: #fff;
      font-weight: bold;
      &:hover {
        opacity: 0.5;
      }
      &:first-child {
        border: 1px solid var(--focus-btn-border);
        opacity: 0.8;
        transition: all 0.5 ease;
      }
      @media (min-width: 1000px) and (max-width: 1400px) {
        height: 8vh;
      }
    }
    > form {
      padding: 1rem 0rem;
      @media (min-width: 430px) {
        grid-column: 1/3;
        display: flex;
        justify-content: center;
      }
      @media (min-width: 470px) {
        grid-area: form;
        align-items: center;

        padding: 1rem 0 0 0;
      }
      > input {
        padding: 1.6rem;
        padding-left: 4rem;
        background: #f2f2f2;
        border: none;
        font-size: 1.6rem;
        width: 50%;
        font-family: var(--font-four);
        background-image: url(${search});
        background-position: 12px 16px;
        background-repeat: no-repeat;

        @media (min-width: 430px) {
          width: auto;
          height: 70%;
        }
        @media (min-width: 1000px) and (max-width: 1400px) {
          width: 100%;
          height: 50%;
        }

        &:focus {
          border: 1px solid #000;
        }
      }
      > button[type='button'] {
        width: 50%;
        padding: 1.6rem;
        background: #231f20;
        font-size: 1.6rem;
        color: #fff;
        font-family: var(--font-four);
        border: none;
        cursor: pointer;

        &:focus {
          opacity: 0.5;
        }
        @media (min-width: 350px) {
          width: 34%;
        }
        @media (min-width: 430px) {
          width: auto;
          height: 70%;
        }
        @media (min-width: 1000px) and (max-width: 1400px) {
          width: 15%;
          height: 50%;
        }
      }
    }
  }
`
