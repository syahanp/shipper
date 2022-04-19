import type { NextPage } from 'next'
import styled from 'styled-components'
import Drivers from '../components/Drivers'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import { DriversProvider } from '../providers/DriversProvider'

const DriverManagementPage: NextPage = () => {
  return (
    <DriversProvider>
      <PageLayout>
        <div className="pageLayout__header">
          <Header />
        </div>

        <div className="pageLayout__drivers">
          <Drivers />
        </div>

        <div className="pageLayout__pagination">
          <Pagination />
        </div>
      </PageLayout>
    </DriversProvider>
  )
}

export default DriverManagementPage

const PageLayout = styled.div`
  .pageLayout__header {
    padding: 2rem;
  }

  .pageLayout__drivers {
    padding: 1rem 0rem 0rem 2rem;
  }

  .pageLayout__pagination {
    padding: 2rem 2rem;
  }
`
