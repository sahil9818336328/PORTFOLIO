import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(null)
  return (
    <AppContext.Provider
      value={{ showMenu, setShowMenu, isSmallScreen, setIsSmallScreen }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
