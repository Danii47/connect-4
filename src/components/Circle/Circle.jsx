import "./Circle.css"

export default function Circle({ value }) {
  const CLASS_NAMMES = {
    0: "noseleccionado",
    1: "seleccionado1",
    2: "seleccionado2",
    null: ""
  }

  return (
    <div className={`circulo ${CLASS_NAMMES[value]}`}>
      
    </div>
  )
}