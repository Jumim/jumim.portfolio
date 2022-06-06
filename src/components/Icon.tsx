import React from 'react';

interface IconType {
  children: React.ReactChild | React.ReactChild[]
}

export const Icon = ({children}: IconType) => {
  return (
    <div className='Icon'>
      {children}
    </div>
  )
}
