import { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

const useResponsiveScreen = () => {
  
  const [width, setWidth] = useState(0)

  const updateDimensions = () => {
    const width = window.innerWidth
    setWidth(width)
  }

  useEffect(() => {
    updateDimensions()

    window.addEventListener('resize', debounce(updateDimensions, 100))

    return () => window.removeEventListener('resize', updateDimensions)
  }, [width])

  return width
}

export default useResponsiveScreen
