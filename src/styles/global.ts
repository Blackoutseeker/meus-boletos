import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    transition: 0.2s;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
`
