/* eslint-disable no-unused-vars */
import React from 'react'

export default function Header() {
  let subHeader = {
        backgroundColor : "blue",color:"white"
  }
  return (
    <div>
        <div style={{backgroundColor:"teal",height:"10vh",width:"100vw"}}>
            <h1>Header</h1>
        </div>
        <div style={subHeader}>
            <h2>SubHeader</h2>
        </div>
    </div>
  )
}
