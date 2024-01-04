/* eslint-disable no-unused-vars */
import React from 'react'

export default function FunctionComponentArrayVar() {
    let data = ["C","C++","Node"]

    let display = data.map((e,i)=>{
        return <h1 key="mykey">Element = {e}</h1>
    })

  return (
    <div>
        {display}  {/*  display variable here */}
    </div>
  )
}
