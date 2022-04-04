import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { App } from './components/App'

import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
)
