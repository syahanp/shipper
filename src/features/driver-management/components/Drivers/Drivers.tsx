import { useDriversState } from 'features/driver-management/providers/DriversProvider'
import { useGlobalState } from 'provider/GlobalProvider'
import React from 'react'
import styled from 'styled-components'
import DriverCard from './DriverCard'
import DriverCardLoading from './DriverCardLoading'

/**
 * List of drivers
 */
const Drivers = () => {
  const { isMobileScreen } = useGlobalState()
  const { drivers, isLoading } = useDriversState()

  return (
    <Container isMobile={isMobileScreen}>
      <div className="drivers__list">
        {isLoading
          ? [...Array(4)].map((_, i) => <DriverCardLoading key={i} />)
          : drivers.map((driver) => (
              <DriverCard
                key={driver.email}
                avatar={driver.picture?.medium}
                name={`${driver.name.first} ${driver.name.last}`}
                phone={driver.phone}
                email={driver.email}
                birth_date={driver.dob.date}
              />
            ))}
      </div>
    </Container>
  )
}

export default Drivers

const Container = styled.div<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? '100%' : '80vw')};
  overflow: hidden;

  .drivers__list {
    display: ${(props) => (props.isMobile ? 'flex' : 'block')};
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    align-items: center;
    gap: 20px;
    white-space: ${(props) => (props.isMobile ? 'normal' : 'nowrap')};
    overflow-x: auto;
  }
`
