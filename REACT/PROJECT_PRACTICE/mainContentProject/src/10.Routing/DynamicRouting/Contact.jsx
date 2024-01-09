/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact</h1>
      <Button onClick={()=>navigate("/")}>Go To Home Page</Button> {" "}
      <Button onClick={()=>navigate(-1)}>Go To Back</Button>
    </div>
  )
}
