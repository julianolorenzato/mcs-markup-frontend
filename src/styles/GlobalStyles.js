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

        @media (max-width: 450px) {
		    margin: 0 5%;
	    }
    }
`

export default GlobalStyles
