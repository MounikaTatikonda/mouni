import React, { useState } from "react";
 import "./App.css";
const App=()=> {
  const [displayValue, setDisplayValue] = useState("");
  const [result, setResult] = useState("");
  const handleClick=(name)=>{
    if (name === "=") {
    
      try {
        const expression = displayValue.replace("÷", "/");
        const calculatedResult = new Function(`return ${expression}`)();
        setResult(calculatedResult);
        setDisplayValue(calculatedResult);
      } catch (error) {
        setResult("Error");
        setDisplayValue("");
      }
    } else if (name === "C") {
      setResult("");
      setDisplayValue("");
    } else {
     
      setDisplayValue(displayValue + name);
    }
  };
    return(
      <div style={{marginLeft:"50"}}>
        <div className="button">
        <div className="button1">
        <div className="output">{displayValue}</div>
            <button name="C" onClick={() => handleClick("C")} style={{  color: "red", backgroundColor: "white",borderColor: "black" }}>C</button>
            <button name="()" onClick={() => handleClick("()")} style={{  color: "lightgreen", backgroundColor: "white",borderColor: "black" }}>()</button>
            <button name="%" onClick={() => handleClick("%")} style={{  color: "lightgreen", backgroundColor: "white",borderColor: "black" }}>%</button>
            <button name="÷" onClick={() => handleClick("÷")} style={{  color: "lightgreen", backgroundColor: "white",borderColor: "black" }}>÷</button>
            <button name="7" onClick={() => handleClick("7")}>7</button>
            <button name="8" onClick={() => handleClick("8")}>8</button>
            <button name="9" onClick={() => handleClick("9")}>9</button>
            <button name="*" onClick={() => handleClick("*")} style={{  color: "lightgreen", backgroundColor: "white",borderColor: "black" }}>*</button>
            <button name="4" onClick={() => handleClick("4")}>4</button>
            <button name="5" onClick={() => handleClick("5")}>5</button>
            <button name="6" onClick={() => handleClick("6")}>6</button>
            <button name="-" onClick={() => handleClick("-")} style={{  color: "lightgreen", backgroundColor: "white",borderColor: "black" }}>-</button>
            <button name="1" onClick={() => handleClick("1")}>1</button>
            <button name="2" onClick={() => handleClick("2")}>2</button>
            <button name="3" onClick={() => handleClick("3")}>3</button>
            <button name="+" onClick={() => handleClick("+")} style={{  color: "lightgreen", backgroundColor: "white",borderColor: "black" }}>+</button>
            <button name="+/-" onClick={() => handleClick("+/-")} >+/-</button>
            <button name="0" onClick={() => handleClick("0")}>0</button>
            <button name="." onClick={() => handleClick(".")}>.</button>
            <button name="=" onClick={() => handleClick("=")} style={{  color: "black", backgroundColor: "green",borderColor: "black" }}>=</button>
       
  </div>
 
  </div>
  </div>
  
  );
}

export default App;
