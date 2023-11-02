import { BrowserRouter } from 'react-router-dom'

import { render } from 'react-dom'

import { ThemeProvider } from './contexts/theme'

import App from './App'

import './index.css'

render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)
