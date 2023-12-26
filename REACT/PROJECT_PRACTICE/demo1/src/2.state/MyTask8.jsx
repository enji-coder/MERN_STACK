// using loop 

import React, { useState } from 'react'

export default function MyTask8() {
  let [colorname, setColor] = useState("teal")
  let [colorcount,setCount] = useState(0)
  let [colorstatus,setStatus] = useState()
  const colorlist = ["red", "blue", "purple", "yellow", "cyan"];
  
  const changeColor = () => {
      
  }
  return (
    <div style={{ backgroundColor: colorname, minHeight: "50px" }}>
      <h1>{colorcount}</h1>
      
      <button onClick={changeColor}>Click</button>
    </div>
  )
}
