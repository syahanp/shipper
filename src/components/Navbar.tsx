import Image from 'next/image'
import { useGlobalFunction, useGlobalState } from 'provider/GlobalProvider'
import React from 'react'
import { Menu } from 'react-feather'
import styled, { useTheme } from 'styled-components'
import Text from './Text'

const Navbar = () => {
  const { color } = useTheme()
  const { isMobileScreen } = useGlobalState()
  const { handleOpenSidebar } = useGlobalFunction()

  return (
    <NavbarLayout>
      <div className="navbar__left">
        {isMobileScreen && (
          <Menu size={24} color={color.black} onClick={handleOpenSidebar} />
        )}
        <div className="navbar__left_logo" style={{ position: 'relative' }}>
          <Image src={'/images/shipper.svg'} alt="shipper" layout="fill" priority />
        </div>
      </div>

      <div className="navbar__user">
        {!isMobileScreen && (
          <Text>
            Hello, <span style={{ color: color.primary }}>Shipper User</span>
          </Text>
        )}

        <div className="navbar__user_avatar" style={{ position: 'relative' }}>
          <Image src={'/images/user.svg'} alt="shipper" layout="fill" priority />
        </div>
      </div>
    </NavbarLayout>
  )
}

export default Navbar

const NavbarLayout = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar__left {
    display: flex;
    gap: 12px;
    align-items: center;

    .navbar__left_logo {
      position: relative;
      height: 25px;
      aspect-ratio: 5/1;
    }
  }

  .navbar__user {
    display: flex;
    align-items: center;
    gap: 12px;

    .navbar__user_avatar {
      position: relative;
      height: 38px;
      aspect-ratio: 1;
    }
  }
`
