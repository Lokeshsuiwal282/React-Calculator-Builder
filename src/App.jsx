import { useState } from "react";
import './App.Style.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Header } from "./Components/Header/Header";
import DraggableButton from "./Components/DraggableButton";
import DroppableArea from "./Components/DroppableArea";
import useCalculatorStore from "./StoreData/Store";
import Footer from "./Components/Footer/Footer";

function App() {
  const { components } = useCalculatorStore();
  const [calculatorValue, setCalculatorValue] = useState("0");
  const [history, setHistory] = useState([]); // Store Calculation History show in page.....
  const [undoStack, setUndoStack] = useState([]); // this are function used in Stack for Undo
  const [redoStack, setRedoStack] = useState([]); // this are function used in stack for Rado

  // Factorial (!) Calculation
  const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1)); // this is calculation are factorial Mathematical Operations

  const onButtonClick = (buttonData) => {
    setUndoStack([...undoStack, calculatorValue]); // Save state for undo
    setRedoStack([]); // Clear redo stack on new input

    if (buttonData === "AC") {
      setCalculatorValue("0");
    } else if (buttonData === "C") {
      setCalculatorValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (buttonData === "=") {
      try {
        const result = eval(calculatorValue).toString();
        setHistory([...history, `${calculatorValue} = ${result}`]);
        setCalculatorValue(result);
      } catch {
        setCalculatorValue("Error");
      }
    }

    // Scientific Functions (log, sin, cos, tan)
    else if (buttonData === "log") {
      setCalculatorValue(Math.log(value).toFixed(5));
    } 
    else if (buttonData === "sin") {
      setCalculatorValue(Math.sin(value).toFixed(5));
    } 
    else if (buttonData === "cos") {
      setCalculatorValue(Math.cos(value).toFixed(5));
    } 
    else if (buttonData === "tan") {
      setCalculatorValue(Math.tan(value).toFixed(5));
    } 
    
    // Square Root (√) Calculation
    else if (buttonData === "√") {
      setCalculatorValue(Math.sqrt(value).toFixed(5));
    } 

    // Factorial (!) Calculation
    else if (buttonData === "!") {
      setCalculatorValue(factorial(value).toString());
    } 

    // Pi (π) Value (3.14159)
    else if (buttonData === "π") {
      setCalculatorValue((Math.PI).toFixed(5));
    } 

    // Degrees to Radians Conversion (deg)
    else if (buttonData === "deg") {
      setCalculatorValue(((value * Math.PI) / 180).toFixed(5)); // Convert degrees to radians
    }
    // Save state for redo
    else if (buttonData === "Undo") {
      if (undoStack.length > 0) {
        const lastValue = undoStack.pop();
        setRedoStack([...redoStack, calculatorValue]); 
        setCalculatorValue(lastValue);
      }
    }
    // Save state for undo 
    else if (buttonData === "Redo") {
      if (redoStack.length > 0) {
        const nextValue = redoStack.pop();
        setUndoStack([...undoStack, calculatorValue]); 
        setCalculatorValue(nextValue);
      }
    } else {
      setCalculatorValue((prev) => (prev === "0" ? buttonData : prev + buttonData));
    }
  };
//  let x = console.log(onButtonClick);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all drak_light_bg">

        {/* this are show Header Box */}
        <Header></Header>
        {/* Calculator Box */}
        <div className="mt-21 w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 drak_light">
          <div className="mb-4 p-3 text-right bg-gray-200 dark:bg-gray-700 text-2xl font-mono rounded-md drak_light_bg">
            {calculatorValue}
          </div>

          <DroppableArea onButtonClick={onButtonClick} />

          <div className="grid grid-cols-4 gap-2 mt-5">
            {["√", "!", "π", "deg", "log", "sin", "cos", "tan"].map((btn, index) => (
              <DraggableButton key={`${btn}-${index}`} value={btn} />
            ))}
          </div>

          {/*this is Undo, Redo, and History Buttons */}
          <div className="flex justify-between mt-4">
            <button onClick={() => onButtonClick("Undo")} className="p-2 bg-yellow-500 text-white rounded-md shadow-md cursor-pointer hover:bg-yellow-600 transition-all drak_light_button">
              Undo
            </button>
            <button onClick={() => onButtonClick("Redo")} className="p-2 bg-green-500 text-white rounded-md shadow-md cursor-pointer hover:bg-green-600 transition-all drak_light_button">
              Redo
            </button>
            {/* <button onClick={() => onButtonClick("History")} className="p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all drak_light">
              Show History
            </button> */}
          </div>
          <div className="grid grid-cols-4 gap-2 mt-5">
            {components.map((button, index) => (
              <DraggableButton key={`${button.value}-${index}`} id={button.id} value={button.value} onClick={onButtonClick} />
            ))}
          </div>

          {/* this is History Display */}
          {history.length > 0 && (
            <div className="mt-4 bg-gray-300 dark:bg-gray-700 p-3 rounded-md drak_light_bg">
              <h3 className="text-lg font-bold mb-2">Calculation History:</h3>
              <ul className="list-disc list-inside">
                {history.map((entry, index) => (
                  <li key={index}>{entry}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Footer></Footer>
      </div>
    </DndProvider>
  );
}

export default App;


