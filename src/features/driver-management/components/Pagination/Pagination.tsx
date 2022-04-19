import Button from 'components/Button'
import {
  useDriversFunction,
  useDriversState,
} from 'features/driver-management/providers/DriversProvider'
import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import styled from 'styled-components'

/**
 * Pagination where we can go to next or previous page
 */
const Pagination = () => {
  const { nextPage, prevPage } = useDriversFunction()
  const { hasPreviousPage, hasNextPage } = useDriversState()

  return (
    <PaginationLayout>
      <div className="pagination__button">
        <Button
          onClick={prevPage}
          disabled={!hasPreviousPage}
          variant="secondary"
          leftIcon={<ChevronLeft size={18} />}
        >
          Previous Page
        </Button>
        <Button
          onClick={nextPage}
          disabled={!hasNextPage}
          variant="secondary"
          rightIcon={<ChevronRight size={18} />}
        >
          Next Page
        </Button>
      </div>
    </PaginationLayout>
  )
}

export default Pagination

const PaginationLayout = styled.div`
  display: flex;
  justify-content: center;

  .pagination__button {
    display: flex;
    gap: 24px;
  }
`
