import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() 
{
    let [singleData,setSingleData] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        axios({
          method: "get",
          url: `https://fakestoreapi.com/products/${id}`,
        }).then((res) => {
          console.log("---->>>> ",res.data);
          setSingleData(res.data);
        }).catch((e) => {
          console.log("Exception  ", e.message);
        });
      }, []);

    return (
        <div className='d-flex' style={{width:"100vw"}}>
            <div className='border border-dark' style={{width:"30%"}}>
                <img src={singleData.image} className='w-100 p-5' />
            </div>
            <div style={{width:"70%"}} className='border border-dark'>
                <h1>{singleData.title}</h1>
                <h4>{singleData.price}</h4>
                <h4>{singleData.category}</h4>
            </div>
        </div>
    )
}
