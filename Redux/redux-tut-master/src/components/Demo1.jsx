import React from 'react'
import { useState } from 'react'

function Demo() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
        <p>Count is: {count}</p>
  
        <div>
          <button onClick={() => 
          {setCount(count+1) // This is a async call
          console.log(count) //As a result,  This will print the old value.
          //The correct way of reading state after the update 
          //would be using the useEffect hook

          //It lets us execute a function after every component re-render (by default)
          // or after any particular variable we declare changes.
          //useEffect(() => console.log(value), [value])

          }}
          >Add 1</button>
          <button onClick={() => setCount(count-1)}>Decrease 1</button>
  
          <button onClick={() => setCount(count+10)}>Add 10</button>
          <button onClick={() => setCount(count-10)}>Decrease 10</button>
  
          <button onClick={() => setCount(0)}>Reset count</button>
        </div>
      </div>
    )
}

export default Demo