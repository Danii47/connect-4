import Circle from "../Circle/Circle";
import "./Column.css"

export default function Column({ board, numberColumn, handleDropCard, turn }) {

  const handleClick = () => {
    handleDropCard(board, numberColumn)
  }

  


  return (
    <div className="columna" onClick={handleClick}>
      {
        board[numberColumn].map((circle, indexCircle) => {
          return <Circle key={(board.length * numberColumn) + indexCircle} value={circle} />
        })
      }
    </div>
  )
}