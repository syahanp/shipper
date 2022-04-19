import Button from 'components/Button'
import Text from 'components/Text'
import { useGlobalState } from 'provider/GlobalProvider'
import React from 'react'
import { Plus } from 'react-feather'
import styled from 'styled-components'
import SearchBar from './SearchBar'

const Header = () => {
  const { isMobileScreen } = useGlobalState()

  return (
    <HeaderLayout isMobile={isMobileScreen}>
      <div className="header__title">
        <Text type="heading" color="primary">
          DRIVER MANAGEMENT
        </Text>
        <Text type="caption" color="gray500">
          Data driver yang bekerja dengan Anda.
        </Text>
      </div>

      <div className="header__action">
        <SearchBar />

        <Button stacked rightIcon={<Plus size={16} />}>
          TAMBAH DRIVER
        </Button>
      </div>
    </HeaderLayout>
  )
}

export default Header

const HeaderLayout = styled.div<{ isMobile: boolean }>`
  background-color: #fff;
  width: 100%;
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  .header__action {
    width: ${(props) => (props.isMobile ? '100%' : 'auto')};
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    gap: 8px;
  }
`
