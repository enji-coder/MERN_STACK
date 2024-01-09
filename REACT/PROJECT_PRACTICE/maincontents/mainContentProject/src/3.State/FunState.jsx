/* eslint-disable no-unused-vars */
import { useState } from 'react'

export default function FunState() {

    let count1 = 0;
    const changeCount=()=>{
        count1+=1;
        console.log("🚀 ~ file: FunState.jsx:7 ~ FunState ~ count1:", count1)
    }

    let [count2,setCount] = useState(0) // assigning initial value of count2 0 

    const changeState=()=>{
        setCount(count2+1)
        console.log("🚀 ~ file: FunState.jsx:17 ~ changeState ~ count2:", count2)
    }

  return (
    <div>
        <h1>Count1 = {count1}</h1>
        <button onClick={()=>changeCount()}>Click Here for Count 1 </button>
        <h1>Count2 = {count2}</h1>
        <button onClick={()=>changeState()}>Click Here for Count 2 </button>
    </div>
  )
}
