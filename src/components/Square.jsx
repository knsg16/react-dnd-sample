import React from 'react'

export default function Square({  children }) {
  // const fill = black ? 'black' : 'white'
  // const stroke = black ? 'white' : 'black'

  return (
    <div
      style={{
        // backgroundColor: fill,
        // color: stroke,
        width: '50px',
        height: '50px'
      }}
    >
      {children}
    </div>
  )
}