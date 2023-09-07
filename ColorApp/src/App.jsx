import ColorBox from "./ColorBox";
import SearchColor from "./SearchColor";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState('')
  const [ hexValue, setHexValue] = useState('')
  return (
    <div className="App">
      <ColorBox
        colorValue={colorValue}
        hexValue={hexValue}  
      />
      <SearchColor
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue} />
    </div>
  )
}

export default App;
