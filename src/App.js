import './App.css';
import React,{useState} from "react";
function App() {
  const[result,setResult]=useState("");


  const clickHandler = (event)=>{
    setResult(result.concat(event.target.value))
  }
  const clearDisplay=()=>{
    setResult("")
  }
  const calc=()=>{
    setResult(eval(result).toString())
  }
  const toggleSign = ()=>{
if (result !== "") {
  if (result[0] === "-") {
    setResult(result.slice(1))
  }
  else{
    setResult("-" + result)
  }
}
  }

  const backspace = () => {
    setResult((prevResult) => prevResult.slice(0, -1)); // Remove the last character
  };

    return (
   <>

   <h1>Welcome to Calculate me! </h1>
   <div className="calculator">
    <input type="text" placeholder="0" id='answer' value={result}/>
    <input type="button" value="AC"  className='button grey' onClick={clearDisplay}/>
    <button type="button" value="" className='button grey' onClick={backspace}><i class='fas fa-backspace'></i></button>
    <input type="button" value="+/-"  className='button grey' onClick={toggleSign}/>
    <input type="button" value="/"  className='button yellow' onClick={clickHandler}/>

    <input type="button" value="9" className='button' onClick={clickHandler}/>
    <input type="button" value="8"  className='button' onClick={clickHandler}/>
    <input type="button" value="7" className='button' onClick={clickHandler} />
    <input type="button" value="*"  className='button yellow' onClick={clickHandler}/>

    <input type="button" value="6"  className='button' onClick={clickHandler}/>
    <input type="button" value="5"  className='button' onClick={clickHandler}/>
    <input type="button" value="4"  className='button' onClick={clickHandler}/>
    <input type="button" value="+"  className='button yellow' onClick={clickHandler}/>

    <input type="button" value="3"  className='button' onClick={clickHandler}/>
    <input type="button" value="2"  className='button' onClick={clickHandler}/>
    <input type="button" value="1"  className='button' onClick={clickHandler}/>
    <input type="button" value="-"  className='button yellow' onClick={clickHandler}/>

    <input type="button" value="0"  className='button' onClick={clickHandler}/>
    <input type="button" value="."  className='button' onClick={clickHandler}/>

   
    <input type="button" value="="  className='button btn-1' onClick={calc}/>

    </div>
    
   </>
  );
}

export default App;
