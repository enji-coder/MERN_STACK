import { useState } from 'react'

export default function FunState2() {
  let [color,setColor] = useState("white");

  const changeColor=()=>{
    setColor(color="blue")
  }

  return (
    <div style={{backgroundColor:color,width:"100vh",height:"50vh"}}>
        <button onClick={()=>changeColor()}>Click Here</button>
        <button onClick={()=> setColor("black")}>Change It Direct</button>
    </div>
  )
}

