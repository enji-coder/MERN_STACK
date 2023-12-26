// it will display 1,2,3 and ask at 3rd position 

import React, { useState } from 'react'

export default function MyTask7() {
  let [colorcount, setColor] = useState(0)
  const colorlist = ["red", "blue", "purple", "yellow", "cyan"];

  const changeColor = () => {
    if (colorcount < colorlist.length) {
      if (colorcount === 3) {
        let res = confirm("Do You Want to continue ?")
        if (!res) {
          setColor(colorcount + 10)
        }
        else {
          setColor(colorcount + 1)
        }
      }
      else {
        console.log("inside the changecolor else part ");
        setColor(colorcount + 1);
      }
    }
  }
  return (
    <div style={{ backgroundColor: colorlist[colorcount], minHeight: "50px" }}>
      <button onClick={changeColor}>Click</button>
    </div>
  )
}
