import React from 'react'
import { createContext, useState } from 'react'

const Navigate = createContext()

const NavigateProvider = ({children}) => {
  const [currentUser, setUser] = useState(false)

  let handleNavigation = () => {if(!currentUser) {
    return <Navigate to="/" replace={true}/>
  }
  return children
} 
}

export default NavigateProvider