/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';

export default function Products() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    }).catch((e) => {
      console.log("Exception  ", e.message);
    });
  }, []);

 
  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <hr />
      <Table borderless hover striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Ratting</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,i)=>{
              return(
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>
                  <img style={{height:"50px"}} src={e.image} />
                  </td>
                  <td>{e.title}</td>
                  <td>{e.rating.rate}</td>
                </tr>
              );
            })
          }

        </tbody>
      </Table>
    </div>
  )
}
