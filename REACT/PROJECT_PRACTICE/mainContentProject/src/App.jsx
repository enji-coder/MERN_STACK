/* eslint-disable no-unused-vars */
import ALLINONE from "./1.Components/ALLINONE";
import Router from "./10.Routing/SimpleRouting/Router";
import SIMPLEROUTING_EXAMPLE from "./10.Routing/SimpleRouting/SIMPLEROUTING_EXAMPLE";
import DYNAMICROUTING from "./10.Routing/DynamicRouting/DYNAMICROUTING";
import MainBody from "./2.Style/MainBody";
import STATEEXAMPLE from "./3.State/STATEEXAMPLE";


export default function App(){

  return(
    <div>
      {/* for component practice checkk below  */}
      {/* <ALLINONE/> */}
      
      {/* for style example practice check below one*/}
      {/* <MainBody/> */}

      {/* for function useState example check below one */}
      {/* <STATEEXAMPLE/> */}
      

      {/* Simple Routing Example */}
      {/* <SIMPLEROUTING_EXAMPLE/> */}

      {/* Proper navigation bar example with dynamic routing  and nested routing */}
      <DYNAMICROUTING/>
    </div>
  )
}