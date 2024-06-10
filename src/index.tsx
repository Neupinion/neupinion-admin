import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import GlobalStyles from './shared/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './shared/styles/theme'

function main() {
  const root = createRoot(document.getElementById('root') as HTMLElement)

  root.render(
    <React.StrictMode>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  )
}

main()
