import { useState } from "react"
import ActiveTurn from "./components/ActiveTurn/ActiveTurn"
import CreateTab from "./components/CreateTab/CreateTab"
import TabSizeInput from "./components/TabSizeInput/TabSizeInput"

function App() {

  const [tabSize, setTabSize] = useState({ height: 6, width: 7 })

  const updateTabSize = ({ height, width }) => {
    setTabSize({ height, width })
  }

  return (
    <>
      <TabSizeInput updateTabSize={updateTabSize} tabSize={tabSize}/>
      <CreateTab
        height={tabSize.height}
        width={tabSize.width}
      />
    </>
  )
}

export default App
