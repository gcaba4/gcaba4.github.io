import React from "react"
import Rectangle from "./components/Rectangle/Rectangle";

const getNumberOfBoxes = () => Math.ceil(window.innerWidth / 100) 

function App() {
  const [numberOfBoxes, setWindowWidth] = React.useState(getNumberOfBoxes())

  // re-render when we can fit another square in the rectangle
  window.addEventListener('resize', (ev) => setWindowWidth(getNumberOfBoxes()))

  
  return (
    <div key={"Container"} className="App" style={{ width: '100%' }}>
      <Rectangle key="rectangle" id={"rectangle"} size={numberOfBoxes} />
    </div>
  );
}

export default App;
