export function comprobateWinner(board, turn) {

  let timesRepeat = 0
  let win

  // ! COMPROBACIÓN COLUMNAS
  let lastValue
  for (let i = 0; i < board.length; i++) {
    timesRepeat = 0
    lastValue = undefined
    for (let u = 0; u < board[0].length; u++) {

      if (board[i][u] === lastValue && board[i][u]) timesRepeat++
      else {
        lastValue = board[i][u]
        timesRepeat = 1
      }
      if (timesRepeat >= 4) {
        win = true
        break
      }
    }
    if (win) break
  }
  if (win) return turn === 1 ? 1 : 2


  // ! COMPROBACIÓN FILAS

  lastValue = undefined
  for (let i = 0; i < board[0].length; i++) {
    timesRepeat = 0
    lastValue = undefined
    for (let u = 0; u < board.length; u++) {

      if (board[u][i] === lastValue && board[u][i]) timesRepeat++
      else {
        lastValue = board[u][i]
        timesRepeat = 1
      }
      if (timesRepeat >= 4) {
        win = true
        break
      }
    }
    if (win) break
  }
  if (win) return turn === 1 ? 1 : 2


  // ! COMPROBACIÓN DIAGONALES

  for (let i = 0; i < board.length - 3; i++) {
    for (let u = 0; u < board[i].length - 3; u++) {
      if (
        board[i + 1][u + 1] && board[i][u] === board[i + 1][u + 1] &&
        board[i + 2][u + 2] && board[i][u] === board[i + 2][u + 2] &&
        board[i + 3][u + 3] && board[i][u] === board[i + 3][u + 3]
      ) {
        win = true
        break
      }
    }

    if (!win) {
      for (let u = 3; u < board[i].length; u++) {
        if (
          board[i + 1][u - 1] && board[i][u] === board[i + 1][u - 1] &&
          board[i + 2][u - 2] && board[i][u] === board[i + 2][u - 2] &&
          board[i + 3][u - 3] && board[i][u] === board[i + 3][u - 3]
        ) {
          win = true
          break
        }
      }
    }

    if (win) break
  }
  if (win) return turn === 1 ? 1 : 2



  // COMPROBACIÓN EMPATE
  if (board.every((column) => column.every((circle) => circle))) return 0

  // SIN GANADOR
  return undefined
}
