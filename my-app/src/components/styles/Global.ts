import { createGlobalStyle } from "styled-components";
import * as theme from "./ThemeStyles";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 1s;
  }

  body {
    background-color: ${ ({ theme }) => theme.colors.background };
    color: ${ ({ theme }) => theme.colors.text };
    font-family: monospace;
  }

  // theme buttons color
  .light {
    background-color: ${theme.light.colors.background};
  }
  .dark {
    background-color: ${theme.dark.colors.background};
  }
  .blue {
    background-color: ${theme.blue.colors.background};
  }
  .green {
    background-color: ${theme.green.colors.background};
  }
  .brown {
    background-color: ${theme.brown.colors.background};
  }
  .pink {
    background-color: ${theme.pink.colors.background};
  }

  // active theme
  .active{
      border: 3px solid ${({ theme }) => theme.colors.border};
  }

`