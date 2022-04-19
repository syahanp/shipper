import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useGlobalState } from 'provider/GlobalProvider'
import { useMounted } from 'hooks'

/**
 * Set our app layout looks like a dashboard.
 * here we specify Navbar, Sidebar, and content for every rendered page
 */
const AppLayout = ({ children }: { children: ReactNode }) => {
  const { isMobileScreen } = useGlobalState()

  const mounted = useMounted()

  // return null until fully hydrated in the client
  if (!mounted) return null

  return (
    <Layout isMobile={isMobileScreen}>
      <Navbar />

      <div className="content_layout">
        <Sidebar />
        <div className="body">{children}</div>
      </div>
    </Layout>
  )
}

export default AppLayout

const Layout = styled.div<{ isMobile: boolean }>`
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.gray100};

  .content_layout {
    min-height: 90vh;
    width: 100%;
    display: ${(props) => (props.isMobile ? 'block' : 'grid')};
    grid-template-columns: 250px 1fr;
  }
`
