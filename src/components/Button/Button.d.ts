import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {

  /**
   * Variant of the button.
   * Primary gives red background
   * Secondary gives tranparent background
   * @default "primary"
   *
   */
  variant?: 'primary' | 'secondary'
  
  /**
   * Add icon at the left of the text
   * @default undefined
   */
  leftIcon?: React.ReactElement

  /**
   * Add icon at the right of the text
   * * @default undefined
   */
  rightIcon?: React.ReactElement

  /**
   * specify wether button is full stacked container or not
   * @default false
   */
  stacked?: boolean;
}

export default ButtonProps;
