import Circle from "../Circle/Circle"
import "./ActiveTurn.css"

export default function ActiveTurn({ turn }) {

  return (
    <div className="turnoContenedor">
      <div className={`circulo ${turn === 1 ? "seleccionado1" : "seleccionado2"}`}></div>
    </div>
  )
}

