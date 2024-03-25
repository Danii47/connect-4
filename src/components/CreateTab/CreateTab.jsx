import { useEffect, useState } from "react"
import Circle from "../Circle/Circle"
import Column from "../Column/Column"
import "./CreateTab.css"
import ActiveTurn from "../ActiveTurn/ActiveTurn"
import { comprobateWinner } from "../../utils/comprobateWinner"

export default function CreateTab({ height, width }) {

  const [board, setBoard] = useState(() => {
    let board = []
    for (let i = 0; i < width; i++) {
      board.push(Array(height).fill(null))
    }
    return board
  })
  const [turn, setTurn] = useState(1)
  const [winner, setWinner] = useState(undefined)

  const restartGame = () => {
    setBoard(() => {
      let board = []
      for (let i = 0; i < width; i++) {
        board.push(Array(height).fill(null))
      }
      return board
    })
    setTurn(1)
    setWinner(undefined)
  }

  const getFreePosition = (board, columnSelected) => {

    if (board[columnSelected].every((value) => value !== null)) return undefined

    for (let i = 0; i < board[columnSelected].length; i++) { // ! RECORRO LA COLUMNA DE ARRIBA A ABAJO PARA BUSCAR EL HUECO LIBRE
      if (board[columnSelected][i] !== null) return i - 1
    }

    return board[columnSelected].length - 1
  }



  const handleDropCard = (board, columnSelected) => {

    const freePosition = getFreePosition(board, columnSelected)
    if (freePosition === undefined) return

    const newBoard = [...board]
    newBoard[columnSelected][freePosition] = turn
    setBoard(newBoard)
    const winner = comprobateWinner(newBoard, turn) // ! || 1 -> Victoria jugador 1 || 2 -> Victoria jugador 2 || 0 -> Empate || undefined -> Sin ganador


    // ! HACER MENSAJE WINNER
    if (winner === 1) return setWinner(1)
    else if (winner === 2) return setWinner(2)
    else if (winner === 0) return setWinner(0)


    const newTurn = (turn === 1) ? 2 : 1

    setTurn(newTurn)
  }

  useEffect(() => {
    setBoard(() => {
      let board = []
      for (let i = 0; i < width; i++) {
        board.push(Array(height).fill(null))
      }
      return board
    })
  }, [width, height])

  return (
    <>
      <div className="tablero">
        {
          board.map((_, indexColumn) => {
            return <Column key={indexColumn} numberColumn={indexColumn} board={board} handleDropCard={handleDropCard} turn={turn} />
          })
        }
      </div>
      <ActiveTurn turn={turn} />
      {
        winner !== undefined && (

          <section className="ganador">
            <div className="texto">
              <h2>
                {
                  winner === 0
                    ? "Empate"
                    : `Ganó:`
                }
              </h2>
              <header className="victoria">
                <Circle value={winner}/>
              </header>

              <footer>
                <button className="botonReinciar" onClick={restartGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>

        )

      }
    </>
  )
}