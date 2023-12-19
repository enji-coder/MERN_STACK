import React, { useState } from 'react'

export default function MyTask7() {
    let [colorcount,setColor] = useState(0)
    const colorlist = ["red","blue","purple","yellow","cyan"];

    const changeColor=()=>{
        if(colorcount==3)
        {
            let res = confirm("Do You Want to continue ?") 
            if(!res)
            {
                
            }
        }
    }
  return (
    <div>

    </div>
  )
}
