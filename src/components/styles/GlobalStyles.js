import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1,h2,h3,h4 {
        margin-bottom: 1rem;
    }
    p {
        line-height: 1.5rem;
    }
`