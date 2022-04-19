import { ComponentPropsWithoutRef } from 'react'
import theme from '../../constants/theme'

type TextTypes = 'heading' | 'body' | 'caption'

export interface TextProps extends ComponentPropsWithoutRef<'div'> {
  children: any;
  
  /**
   * Text type. Default to body1
   */
  type?: TextTypes

  /**
   * Text color object
   */
  color?: keyof typeof theme.color
}