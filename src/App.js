
import './App.css';
import { useState } from 'react';
function App() {
  const [ counter,setCounter] =useState(0) 
  const handleClick=(name) =>{
    if(name=="+"){
      setCounter(counter+1);
    } else {
      setCounter(counter-1);
    }
  }
  const [text, setText] = useState("");
  const [showOutput, setshowOutput] = useState(false);
  return (
   
      <div className='app'>
 <h1>{counter}</h1>
 <button onClick={()=> handleClick("+")}> + </button>
 <button onClick={()=> handleClick("-") }> - </button>
 <input type="text " placeholder='write a text ' onChange={(e)=>setText(e.target.value)}/>
 <button className='btn' onClick={()=>setshowOutput(true)}>  click to show </button>
 <h1> the output : {showOutput?text :""}</h1>
 
      </div>
  );
}

export default App;
