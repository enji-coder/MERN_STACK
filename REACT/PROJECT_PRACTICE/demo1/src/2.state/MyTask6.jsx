import { useState } from "react";


export default function MyTask5() {
  const colorList = ["red","blue","purple","black","yellow"];
  let [colorcount,setColor] = useState(0)
  const changeColor=()=>{    

      if(colorcount<colorList.length || colorcount!=6)
      {
        setColor(colorcount+1)
      }
      else
      {
          let res = confirm("do you want to continue select ok ");
          if (res)
          {
            setColor(colorcount+1)
          }
          else
          {
            setColor(0)
          }
      }
  }
  
  return (
    <div style={{backgroundColor:colorList[colorcount],minHeight:"100px"}}>
        <h1>{colorcount}</h1>
        <button onClick={changeColor}>Change Color From Array </button>
    </div>
  )
}
