import React from 'react'
import classNames from 'classnames'
import { WhiteSpaceProps } from './WhiteSpace.type'
import style from './WhiteSpace.module.css'

/**
 * @description: a blank space to give some space between elements (Ready)
 * @example
 * <WhiteSpace size='lg' />
 */
const WhiteSpace: React.FC<WhiteSpaceProps> = ({ size = 'md' }) => {
  return <div className={classNames(style[size])} />
}

export default WhiteSpace
