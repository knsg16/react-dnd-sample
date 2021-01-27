import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'
import UniformImg from "./images/UniformImg";

function Knight() {
  const [{isDragging}, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 48,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      <UniformImg/>
    </div>
  )
}

export default Knight