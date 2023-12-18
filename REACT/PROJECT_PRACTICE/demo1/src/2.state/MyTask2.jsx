// Button Click Event Counter Change 

import { useState } from "react"
import { Button } from "reactstrap";

export default function MyTask2() {
    // declare variable and method 
    let [count,setCount] = useState(0);
  
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        console.log(count);
        if(count!=0)
        {
            setCount(count-1);
        }
    }
  return (
    <div>
        <h1>Count = {count}</h1>
        <Button onClick={increment}>Add</Button>
        <Button onClick={decrement}>Remove</Button>
    </div>
  )
}
