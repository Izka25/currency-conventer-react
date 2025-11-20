import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: "Montserrat", sans-serif;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
}
`;