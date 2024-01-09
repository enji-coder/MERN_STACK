/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Home</h1>

      {/* send data one route to another route using below code - dynamic routing */}

      <ul className='ul_link'>
          <li role="button" onClick={()=>navigate("/about/software")} >Software</li>
          <li role="button" onClick={()=>navigate("/about/designing")}>Designing</li>
          <li role="button" onClick={()=>navigate("/about/hardware")}>Hardware</li>
      </ul>
    </div>
  )
}
