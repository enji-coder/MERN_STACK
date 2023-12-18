// change div color on button click event 

import { useState } from "react"
import { Button } from "reactstrap";

export default function MyTask3() {
    let [colorname,setColor] = useState("teal");

    const changeColor=()=>{
        setColor(colorname="blue")
        console.log(colorname);
    }

  return (
    <div style={{backgroundColor : colorname}}>
        <Button onClick={changeColor}>Change Color</Button>
    </div>
  )
}
