import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Search } from 'react-feather'
import {
  useDriversFunction,
  useDriversState,
} from 'features/driver-management/providers/DriversProvider'

const SearchBar = () => {
  const { color } = useTheme()
  const { inputValue } = useDriversState()
  const { handleInputValue } = useDriversFunction()

  return (
    <InputLayout htmlFor="search">
      <Search size={18} color={color.primary} strokeWidth={3} />

      <input
        id="search"
        value={inputValue}
        onChange={handleInputValue}
        placeholder="Cari Driver"
      />
    </InputLayout>
  )
}

export default SearchBar

const InputLayout = styled.label`
  padding: 12px 12px;
  border: ${({ theme }) => `1px solid ${theme.color.gray300}`};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: text;

  input {
    width: 100px;
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none !important;

    &:focus {
      outline: 0;
    }
  }
`
