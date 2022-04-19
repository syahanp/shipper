import { useResponsiveScreen } from 'hooks'
import React, { createContext, ReactNode, useContext, useState } from 'react'

interface GlobalState {
  screenWidth: number
  isMobileScreen: boolean
  isSidebarOpen: boolean
}

interface GlobalFunc {
  handleOpenSidebar: () => void
}

export const GlobalContextState = createContext<GlobalState | undefined>(undefined)
export const GlobalContextFunction = createContext<GlobalFunc | undefined>(undefined)

/**
 * The reason why we need the global provider is for performance and simplicity
 * to calculate responsive screen.
 *
 * Placing useResponsiveScreen() in Navbar and Sidebar to change their behavior
 * make a hooks run twice. thats not performant, even we debounce the calculation.
 *
 * Instead, make a provider as a single source of truth of screen size value.
 * So Navbar and Sidebar can refer to this provider to get the value.
 */
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const screenWidth = useResponsiveScreen()

  const handleOpenSidebar = () => {
    setSidebarOpen((prevState) => !prevState)
  }

  const isMobileScreen = screenWidth < 800

  const contextState = { screenWidth, isMobileScreen, isSidebarOpen }

  const contextFunction = { handleOpenSidebar }

  return (
    <GlobalContextState.Provider value={contextState}>
      <GlobalContextFunction.Provider value={contextFunction}>
        {children}
      </GlobalContextFunction.Provider>
    </GlobalContextState.Provider>
  )
}

export const useGlobalState = () => {
  const context = useContext(GlobalContextState)

  if (context === undefined) {
    throw new Error('useGlobal must be used within a GlobalProvider')
  }

  return context
}

export const useGlobalFunction = () => {
  const context = useContext(GlobalContextFunction)

  if (context === undefined) {
    throw new Error('useGlobalFunction must be used within a GlobalProvider')
  }

  return context
}
