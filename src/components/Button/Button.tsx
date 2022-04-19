import React from 'react'
import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.d'

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  leftIcon,
  rightIcon,
  stacked,
  ...rest
}) => {
  return (
    <ButtonComponent variant={variant} stacked={stacked} {...rest}>
      {leftIcon}
      {children}
      {rightIcon}
    </ButtonComponent>
  )
}

export default Button

const primaryButton = css`
  background-color: ${({ theme }) => theme.color.primary};
  color: #fff;
  font-size: 15px;

  svg {
    color: #fff;
  }
`

const secondaryButton = css`
  background-color: transparent;
`

const disabledButton = css`
  color: ${({ theme }) => theme.color.gray300} !important;
  cursor: not-allowed !important;
`

const ButtonComponent = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 14px;
  border-radius: 2px;
  text-align: left;
  cursor: pointer;
  user-select: none;

  /** Button variant style */
  ${(props) => props.variant === 'primary' && primaryButton}
  ${(props) => props.variant === 'secondary' && secondaryButton}

  /* Disabled button style */
  ${(props) => props.disabled && disabledButton}
`
