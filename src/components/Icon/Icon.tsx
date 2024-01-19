import React from 'react'
import './Icon.scss'

interface IconType {
  children: React.ReactNode | React.ReactNode[]
  className?: 'gray' | undefined
}

export const Icon = ({ children, className }: IconType) => {
  return <div className={['Icon', className === undefined ? 'default' : className].join(' ')}>{children}</div>
}
