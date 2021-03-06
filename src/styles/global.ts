/* eslint-disable max-len */
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&family=Roboto+Mono:wght@300;400;500&display=swap');
  * {
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Flex', sans-serif;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }
`;
