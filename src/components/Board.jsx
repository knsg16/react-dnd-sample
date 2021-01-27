import React from 'react'
import Player from './Player'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare'

function renderSquare(i, playerPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, playerPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [playerX, playerY]) {
  if (x === playerX && y === playerY) {
    return <Player />
  }
}

export default function Board({ playerPosition}) {
  console.log(playerPosition);
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, playerPosition))
  }

  return (
    <div style={{ backgroundImage: "url(/field.png)", backgroundSize: "contain" }}>
      <DndProvider backend={HTML5Backend}>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {squares}
        </div>
      </DndProvider>
    </div>
  )
}