import React from 'react'
import Link from 'next/link'
import { Icon } from 'react-feather'
import styled, { css, useTheme } from 'styled-components'
import Text from '../Text'

interface Props {
  icon: Icon
  title: string
  url: string
  isActive?: boolean
}

const SidebarItem: React.FC<Props> = ({ icon, title, url = '', isActive }) => {
  const { color } = useTheme()
  const Icon = icon

  return (
    <Link href={url} key={title} passHref>
      <Item isActive={isActive} className="sidebar__item">
        <Icon size={20} color={isActive ? color.primary : color.black} />
        <Text color={isActive ? 'primary' : 'black'}>{title}</Text>
      </Item>
    </Link>
  )
}

export default SidebarItem

const activeObject = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: ${({ theme }) => theme.color.primary};
  }
`

const Item = styled.a<{ isActive?: boolean }>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;

  ${(props) => props.isActive && activeObject}
`
