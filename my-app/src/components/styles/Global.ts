import { createGlobalStyle } from "styled-components";
import * as theme from "./ThemeStyles";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    transition: all 1s ease;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: monospace;
    overflow-x: hidden;
  }

  // theme buttons color
  .light-theme {
    background-color: ${theme.light.colors.background};
  }
  .dark-theme {
    background-color: ${theme.dark.colors.background};
  }
  .blue-theme {
    background-color: ${theme.blue.colors.background};
  }
  .green-theme {
    background-color: ${theme.green.colors.background};
  }
  .brown-theme {
    background-color: ${theme.brown.colors.background};
  }
  .pink-theme {
    background-color: ${theme.pink.colors.background};
  }

  // active theme
  .active{
      border: 3px solid ${({ theme }) => theme.colors.border};
  }

`;
