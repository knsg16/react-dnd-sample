import React from "react";
import Knight from './Knight'
import Squere from './Squere'

export default function Main() {
  return (
    <div>
      <Squere black>
        <Knight/>
      </Squere>
    </div>
  )
}