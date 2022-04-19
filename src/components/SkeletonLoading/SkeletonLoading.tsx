import React from 'react'
import { SkeletonProps } from './type'
import commonStyle from './skeleton.module.css'
import classNames from 'classnames'

/**
 * Skeleton loading
 *
 * @example
 * <SkeletonLoading width={10} height={9} />
 */
const SkeletonLoading: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 9,
  className,
  style,
  ...rest
}) => {
  const customSize: React.CSSProperties = {
    width: width,
    height: height,
  }

  return (
    <div
      className={classNames(commonStyle['skeleton_loading'], className)}
      style={{ ...customSize, ...style }}
      {...rest}
    />
  )
}

export default SkeletonLoading
