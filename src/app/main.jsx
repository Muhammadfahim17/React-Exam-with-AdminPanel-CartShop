import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../../i18n.js'
import { BrowserRouter } from 'react-router'
import "flag-icons/css/flag-icons.min.css";
import { Provider } from 'react-redux'
import { store } from '../features/store/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Suspense fallback={'loading'} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Suspense>
    </Provider>
  </StrictMode>,
)
