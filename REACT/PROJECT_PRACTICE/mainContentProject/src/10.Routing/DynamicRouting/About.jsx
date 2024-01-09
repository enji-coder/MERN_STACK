/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

export default function About() { 
  {/* Get value from url using useParams */}

  // let {name} = useParams();  destructure   direct use with {name}

  let data = useParams();

  return (
    <div>
      <h1>About</h1>
      <p>Let's discuss About {data.name}</p>
    </div>
  )
}
