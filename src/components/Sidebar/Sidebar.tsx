import React, { useRef } from 'react'
import styled from 'styled-components'
import { Calendar, Home, User } from 'react-feather'
import SidebarItem from './SidebarItem'
import { useRouter } from 'next/router'
import { useGlobalFunction, useGlobalState } from 'provider/GlobalProvider'
import { useDetectClickOutside } from 'hooks'

const sidebarMenu = [
  {
    title: 'Beranda',
    url: '/',
    icon: Home,
  },
  {
    title: 'Driver Management',
    url: '/driver',
    icon: User,
  },
  {
    title: 'Pickup',
    url: '/pickup',
    icon: Calendar,
  },
]

const Sidebar = () => {
  const router = useRouter()
  const { isMobileScreen, isSidebarOpen } = useGlobalState()
  const { handleOpenSidebar } = useGlobalFunction()

  // handle click outside of sidebar to close the sidebar when mobile screen
  const sidebarRef = useRef<HTMLDivElement>(null)
  useDetectClickOutside(sidebarRef, () => isSidebarOpen && handleOpenSidebar())

  return (
    <>
      {isMobileScreen && isSidebarOpen && <Overlay />}
      <SidebarLayout
        ref={sidebarRef}
        isMobile={isMobileScreen}
        isOpen={isSidebarOpen}
      >
        <div className="sidebar__menu">
          {sidebarMenu.map((item) => {
            return (
              <SidebarItem
                key={item.title}
                title={item.title}
                url={item.url}
                icon={item.icon}
                isActive={router.pathname === item.url}
              />
            )
          })}
        </div>
      </SidebarLayout>
    </>
  )
}

export default Sidebar

const SidebarLayout = styled.div<{ isMobile?: boolean; isOpen: boolean }>`
  background-color: #fff;
  padding: 2rem 0rem;
  height: 100%;
  z-index: 9999;
  position: ${(props) => (props.isMobile ? 'fixed' : 'block')};
  top: 0;
  left: ${(props) => (props.isOpen ? '0' : '-100%')};
  transition: all 0.2s ease-in-out;

  .sidebar__menu {
    display: inline-flex;
    flex-direction: column;
  }
`

const Overlay = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.black};
  opacity: 0.6;
`
