import React from 'react'
import titleStyle from './Title.module.scss';
import classNames from 'classnames';

interface titlePropTypes {
    title: string,
    parentStyle ?: any
}
export default function Title({title,parentStyle} : titlePropTypes) {
  return (
    <div className={classNames([titleStyle.title,parentStyle])}>{title}:</div>
  )
}
