import ReactDOM from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
