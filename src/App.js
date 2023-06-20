import {useState, useEffect } from "react";

 export default function App() {
// you have to use useState concurrently with useEffect

    const [counter, setCounter] = useState(0);
    useEffect( () => {
      console.log(counter);
    })

    return(
      <div className="App">
        {counter}
        
        <button onClick={ () => {

          setCounter(counter + 1)
        }

        }>
          
          Higher
 
        </button>
      
      </div>
    )
  }