import MyTask1 from "./1.components/MyTask1";
import MyTask2 from "./2.state/MyTask2";
import MyTask3 from "./2.state/MyTask3";
import MyTask4 from "./2.state/MyTask4";
import MyTask5 from "./2.state/MyTask5";
import MyTask6 from "./2.state/MyTask6";
// import "./App.css"; // automatically call in main.css

export default function App(){
  return (
    <div className="appdiv">
        {/* <MyTask1/> */}
        {/* <MyTask2/>         */}
        {/* <MyTask3/> */}
        {/* <MyTask4/> */}
        <MyTask5/>
        {/* <MyTask6/> */}
    </div>
  )
}