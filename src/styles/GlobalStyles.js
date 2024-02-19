import { createGlobalStyle } from 'styled-components';

// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  html, body, #root {
    height: 100%;
    background-color: #161a1e;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }


`;