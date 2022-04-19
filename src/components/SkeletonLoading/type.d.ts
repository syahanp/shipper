import React, { ComponentPropsWithoutRef } from 'react';

export interface SkeletonProps extends ComponentPropsWithoutRef<'div'> {
  width?: number | string;

  height?: number | string;
}
