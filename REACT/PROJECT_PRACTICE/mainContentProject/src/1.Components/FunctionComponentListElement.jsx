/* eslint-disable no-unused-vars */
import React from 'react'

export default function FunctionComponentListElement() {
    let data = ["C","c++","React","Flutter","Node"];
  return (
    <div>
        {
            data.map((element,index)=>{
                return <h1 key="mykey">{index} = {element}</h1>;
            })
        }
    </div>
  )
}
