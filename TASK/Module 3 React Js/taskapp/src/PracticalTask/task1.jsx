// npm install reactstrap react react-dom
import { useState } from 'react';
import {Button} from 'reactstrap';

export default function Task1(){
    let [count,setCount] = useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        if(count!=0)
        {
            setCount(count-1);
        }
    }
    return(
        <div>
            <h1>React Web</h1>
            <h1>{count}</h1>
            <Button color='primary' onClick={increment}>Increment</Button>  {''}
            <Button color='warning' onClick={decrement}>Decrement</Button>
        </div>
    );
}