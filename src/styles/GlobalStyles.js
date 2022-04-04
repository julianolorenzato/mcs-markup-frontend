import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: ${({ theme }) => theme.fonts.primary};
        background: ${({ theme }) => theme.colors.gradient};
        color: #fff;
    }

`

export default GlobalStyles
