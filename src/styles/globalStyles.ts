import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{  
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
    }

    textarea:focus, input:focus, select:focus {
        outline: 0;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
    }

    .primary-color, .wallet {
        color: ${({ theme }) => theme.colors.primary};
    }

`;

export default GlobalStyle;
