import { useState } from "react"
import { Button } from "reactstrap"

export default function MyTask4() {
    let [status,setStatus] = useState(false)

    const changeStatus=()=>{
        console.log(status);
        setStatus(!status)
        // if(status)
        // {
        //     setStatus(status = false)
        //     // setStatus(!status)
        // }
        // else
        // {
        //     setStatus(status = true)
        // }
    }
  return (
    <div style={{backgroundColor : status? "blue" : "black"}}>
        <Button onClick={changeStatus}>Click</Button>
    </div>
  )
}
