import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.gray900};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.white};
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Bebas Neue', Helvetica, Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
  }

  input,
  textarea,
  select {
    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.gray800} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white}  !important;
    border: 0px solid ${({ theme }) => theme.colors.gray600} !important; /* <-- AQUI */
    transition: background-color 5000s ease-in-out 0s  !important;
  }
`;
