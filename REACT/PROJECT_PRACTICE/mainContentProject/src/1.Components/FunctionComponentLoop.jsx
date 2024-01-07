/* eslint-disable no-unused-vars */
import React from 'react'
import FunctionComponent from './functioncomponent';

export default function FunctionComponentLoop() 
{
  let data = [1,2,3,4,5];
  return (
    <div>
        {
            data.map((element,i)=>{
                return <FunctionComponent key="i"></FunctionComponent>;
            })
        }
    </div>
  )
}
