import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './globalvalues/AppContext.jsx'
import { UserProvider } from './globalvalues/UserContext.jsx'
import { TodoContextProvider } from './globalvalues/TodoContext.jsx'
import { AuthProvider } from './globalvalues/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode><AuthProvider>
    <UserProvider>
      <TodoContextProvider>
         <AppContextProvider>
          <App />
         </AppContextProvider>
        </TodoContextProvider>
      </UserProvider></AuthProvider>
  </StrictMode>,
)
