let playerPosition = [0, 0]
let observer = null

function emitChange() {
  observer(playerPosition)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function movePlayer(toX, toY) {
  playerPosition = [toX, toY]
  emitChange()
}