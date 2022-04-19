import React, { createContext, ReactNode, useContext, useState } from 'react'
import useDriversData from '../hooks/useDriversData'
import { DriversState, DriversFunc } from './DriversProvider.type'

export const DriversContextState = createContext<DriversState | undefined>(undefined)

export const DriversContextFunction = createContext<DriversFunc | undefined>(
  undefined
)

/**
 * Context provider specific for driver management
 */
export const DriversProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValue] = useState('')

  /**
   * populate drivers data in this hooks
   */
  const { metadata, isLoading, nextPage, prevPage, hasPreviousPage, hasNextPage } =
    useDriversData(inputValue)

  /**
   * handle search onChange
   */
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value)
  }

  const contextState = {
    inputValue,
    currentPage: metadata.current_page,
    totalPage: metadata.total_page,
    drivers: metadata.drivers,
    isLoading,
    hasPreviousPage,
    hasNextPage,
  }

  const contextFunction = {
    handleInputValue,
    nextPage,
    prevPage,
  }

  return (
    <DriversContextState.Provider value={contextState}>
      <DriversContextFunction.Provider value={contextFunction}>
        {children}
      </DriversContextFunction.Provider>
    </DriversContextState.Provider>
  )
}

export const useDriversState = () => {
  const context = useContext(DriversContextState)

  if (context === undefined) {
    throw new Error('useDriversState must be used within a DriversProvider')
  }

  return context
}

export const useDriversFunction = () => {
  const context = useContext(DriversContextFunction)

  if (context === undefined) {
    throw new Error('useDriversFunction must be used within a DriversProvider')
  }

  return context
}
