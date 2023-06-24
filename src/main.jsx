import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginPage from './pages/Login.jsx'
import Chatroom from './pages/Chatroom.jsx'
import { SignInProvider } from './context/AuthContext.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/Chatroom",
    element: <Chatroom/>
  },
  {
    path:"/LoginPage",
    element: <LoginPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignInProvider>
      <RouterProvider router={router}/>
    </SignInProvider>
  </React.StrictMode>,
)
