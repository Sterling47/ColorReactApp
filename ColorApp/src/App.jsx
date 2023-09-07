import ColorBox from "./ColorBox";
import SearchColor from "./SearchColor";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const  [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <ColorBox
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}  
      />
      <SearchColor
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText} />
    </div>
  )
}

export default App;
