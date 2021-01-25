import React from "react";
import Board from './Board'
import ReactDOM from 'react-dom'
import { observe } from './Game'

const root = document.getElementById('root')


export default function Main() {
  return (
    observe((knightPosition) =>
      ReactDOM.render(<Board knightPosition={knightPosition} />, root)
    )
  )
}