import React from "react"; // React namespace importing from react package
import App from "./App"; // importing App from App.jsk 
import ReactDom from 'react-dom/client';
import MyTask1 from "./1.components/MyTask1";
import "./index.css";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
)



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
