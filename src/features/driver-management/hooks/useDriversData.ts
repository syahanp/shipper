import { useEffect, useRef, useState } from "react"
import getDrivers from "../services/getDrivers"

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

  const hasPreviousPage = metadata.current_page > 1
  const hasNextPage = metadata.current_page < metadata.total_page

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
    }).catch(() => {console.log("errrorrrrr")})
  }, [])

  useEffect(() => {
    if (metadata.current_page > 1) {
      const {pageData} = dataRange(metadata.current_page, drivers.current)

      setMetadata((prevState) => ({
        ...prevState,
        drivers: pageData,
      }))
    }
  }, [metadata.current_page])

  useEffect(() => {
    const filteredData = drivers.current.filter((item: any) => item.name.first.toLowerCase().includes(inputValue))
    const {pageData, totalPage} = dataRange(1, filteredData)

    setMetadata((prevState) => ({
      ...prevState,
      drivers: pageData,
      total_page: totalPage
    }))
  }, [inputValue])

  const nextPage = () => {
    if (!hasNextPage) return;

    setMetadata((prevState) => ({
      ...prevState,
      current_page: prevState.current_page++,
    }))
  }

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