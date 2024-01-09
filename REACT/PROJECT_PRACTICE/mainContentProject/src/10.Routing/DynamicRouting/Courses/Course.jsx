/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Course() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>All Courses</h1>
      <Button onClick={()=>navigate("/course/frontend")}>FrontEnd</Button> {" "}
      <Button onClick={()=>navigate("/course/fullstack")}>FullStack</Button>
    </div>
  )
}
