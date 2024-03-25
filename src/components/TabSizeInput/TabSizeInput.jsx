import "./TabSizeInput.css"

export default function TabSizeInput({ updateTabSize, tabSize }) {


  const handlerChangeValue = (event) => {
    const id = event.target.id
    let value = event.target.value

    if (id === "width") {
      // ! Máximo de ancho 15
      if (value > 15) value = 15
      // ! Mínimo de ancho 1
      if (value < 1 && value !== "") value = 1
      if (value !== "") value = Number(value)
      updateTabSize({ height: tabSize.height, width: value })
    } else {
      // ! Máximo de alto 10
      if (value > 9) value = 9 
      // ! Mínimo de alto 1
      if (value < 1 && value !== "") value = 1
      if (value !== "") value = Number(value)
      updateTabSize({ height: value, width: tabSize.width })
    }

  }
  return (
    <>
      
      <div className="inputContenedor">
        <input type="number" id="width" className="inputTamanoTablero" placeholder="Ancho" onChange={handlerChangeValue} value={tabSize.width} />
        <strong>×</strong>
        <input type="number" id="height" className="inputTamanoTablero" placeholder="Alto" onChange={handlerChangeValue} value={tabSize.height} />
      </div>

    </>
  )
}