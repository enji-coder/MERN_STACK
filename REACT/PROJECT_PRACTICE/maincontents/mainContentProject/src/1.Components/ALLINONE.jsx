/* eslint-disable no-unused-vars */
import React from 'react'
import FunctionComponent from './functioncomponent'
import FunctionComponentArrayVar from './FunctionComponentArrayVar'
import FunctionComponentListElement from './FunctionComponentListElement'
import FunctionComponentLoop from './FunctionComponentLoop'
import ClassComponent from './ClassComponent'

export default function ALLINONE() {
  return (
    <div>
      <FunctionComponent/> {/* Basic display of function component */}
      <FunctionComponentLoop/> {/* Display component looping wise */}
      <FunctionComponentListElement/>  {/*display list of element in component */}
      <FunctionComponentArrayVar/>  {/* display looping content in render section */}


      <ClassComponent/> {/* basic display of class component */} 

      
    </div>

  )
}
