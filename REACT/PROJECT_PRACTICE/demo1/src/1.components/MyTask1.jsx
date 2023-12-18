// display 3 card top and bottom using map 
import React from 'react'
import MyCard from './MyCard';

export default function MyTask1() {
    const mydivstyle = {
        color: "white",
        backgroundColor: "white",
        padding: "10px",
        margin : "20px",
        fontFamily: "Arial",
        display : "flex"
      };
      return <div>
      
        <h1 style={{textAlign:"center"}}>Welcome to my first react app </h1>
        <div style={mydivstyle}>
        {
          [1,2,3].map((e,i)=>{
            return <MyCard key={i}/>;
          })
        }
        </div>
        <div style={mydivstyle}>
        {
          [1,2,3].map(()=>{
            return <MyCard/>;
          })
        }</div>
        
      </div>
}
