import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

  *, 
  *::after,
  *::before {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.bg};
    color: ${theme.colors.text};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
  }

  section {
    padding-top: 130px;
  }

  h3 {
    font-weight: 500;
    font-size: 20px;
    text-transform: uppercase;


  }

  a { 
		text-decoration: none;
    color: ${theme.colors.text};
  }

  ul {
		list-style: none;
  }

  button {
		border: none;
		background-color: transparent;
  }

`;
