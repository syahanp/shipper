import { useEffect, useRef, useState } from "react"
import getDrivers from "../services/getDrivers"

/**
 * handle what data should we display in current_page, provided by all data 
 * we had by API or cache
 */
const dataRange = (currentPage: number, data: any[]) => {
  const limit = 5

  const startIndex = currentPage * limit - limit
  const endIndex = startIndex + limit
  
  return {
    pageData: data.slice(startIndex, endIndex),
    totalPage: Math.floor(data.length / limit)
  }
}

const useDriversData = (inputValue: string) => {
  const drivers = useRef([]);
  const [isLoading, setLoading] = useState(true)
  const [metadata, setMetadata] = useState({
    current_page: 1,
    total_page: 1,
    drivers: [{}],
  })

  /**
   * handle wether we have data before or after current_page
   * this gives us ability to set pagination should disabled or not
   */
  const hasPreviousPage = metadata.current_page > 1
  const hasNextPage = metadata.current_page < metadata.total_page

  /**
   * This effect specify the first mount of the app. 
   * here we populate data from service for the first time
   */
  useEffect(() => {
    getDrivers().then((data) => {
      const driversData = data.results;

      drivers.current = driversData;

      const {pageData, totalPage} = dataRange(1, driversData)

      setMetadata((prevState) => ({
        ...prevState,
        drivers: pageData,
        total_page: totalPage
      }))

      setLoading(false)
    }).catch(() => {})
  }, [])

  /**
   * This effect triggered when pagination clicked. 
   * pagination will add or subtract current_page state and this 
   * effect will handle which drivers data should we display
   */
  useEffect(() => {
    if (metadata.current_page > 1) {
      const {pageData} = dataRange(metadata.current_page, drivers.current)

      setMetadata((prevState) => ({
        ...prevState,
        drivers: pageData,
      }))
    }
  }, [metadata.current_page])

  /**
   * This effect specific for drive search
   * everytime we search, current_page will olways back to 1 and 
   * the data will repopulate by filter the first name
   */
  useEffect(() => {
    const filteredData = drivers.current.filter((item: any) => item.name.first.toLowerCase().includes(inputValue))
    const {pageData, totalPage} = dataRange(1, filteredData)

    setMetadata(() => ({
      current_page: 1,
      drivers: pageData,
      total_page: totalPage
    }))
  }, [inputValue])

  /**
   * add current_page to +1
   */
  const nextPage = () => {
    if (!hasNextPage) return;

    setMetadata((prevState) => ({
      ...prevState,
      current_page: prevState.current_page++,
    }))
  }

  /**
   * subtract current_page to -1
   */
  const prevPage = () => {
    if (!hasPreviousPage) return;
    
    setMetadata((prevState) => ({
      ...prevState,
      current_page: prevState.current_page--,
    }))
  }

  return {
    data: drivers,
    isLoading,
    metadata,
    nextPage,
    prevPage,
    hasPreviousPage,
    hasNextPage
  }
}

export default useDriversData;