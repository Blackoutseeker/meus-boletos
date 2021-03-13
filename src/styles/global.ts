import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.2s;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: Roboto;
  }
`
