import * as React from 'react'
import classNames from 'classnames'
import { TextProps } from './text.d'
import theme from '../../constants/theme'

import style from './Text.module.css'

/**
 * Text component based on our design system
 */
const Text: React.FC<TextProps> = ({
  children,
  type = 'body',
  color = 'black',
  className,
  ...rest
}) => {
  const textColor = color ? theme.color[color] : theme.color.black

  return (
    <div
      className={classNames(style[type], className)}
      style={{ color: textColor }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Text
