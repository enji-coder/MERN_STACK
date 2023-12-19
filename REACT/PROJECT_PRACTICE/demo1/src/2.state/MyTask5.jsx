import { useState } from "react";
export default function MyTask5() {
  const colorList = ["red","blue","purple","black","yellow"];
  let [colorcount,setColor] = useState(0)
  let [displayproperty,setDisplay] = useState("block");
  const changeColor=()=>{    

      if(colorcount<colorList.length || colorcount!=5)
      {
        setColor(colorcount+1)
      }
      else
      {
          let res = confirm("do you want to continue select ok ");
          if (res)
          {
            setColor(0)
          }
          else
          {
            setColor(0);
            setDisplay("none");
          }
      }
  }
  return (
    <div style={{backgroundColor:colorList[colorcount],minHeight:"100px"}}>
        <h1>{colorcount}</h1>
        <button style={{display:displayproperty}} onClick={changeColor}>Change Color From Array </button>
    </div>
  )
}
