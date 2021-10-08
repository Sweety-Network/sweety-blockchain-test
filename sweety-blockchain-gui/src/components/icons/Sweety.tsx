import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as SweetyIcon } from './images/sweety.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={SweetyIcon} viewBox="0 0 150 58" {...props} />;
}
