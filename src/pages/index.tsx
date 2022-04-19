import Button from 'components/Button'
import Text from 'components/Text'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeLayout>
      <div className="home__content">
        <Text type="heading">Selamat Datang, Shipper User</Text>
        <Link href="/driver">
          <a>
            <Button>KELOLA DRIVER</Button>
          </a>
        </Link>
      </div>
    </HomeLayout>
  )
}

export default Home

const HomeLayout = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .home__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  }
`
