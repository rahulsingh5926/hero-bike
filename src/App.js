

import Body from "./Component/Body";
import Navbar from  "./Component/Navbar";

import Bottom2 from "./Component/Footer2";
import React from 'react'
import Body2 from "./Component/Body2";
import Body3 from "./Component/Body3";

import "./App.css";
import Bottom1 from "./Component/Footer1";
import Video from "./Component/Video";
import Detectface from "./Component/Detectface"
function App() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Video/>
      <Body2/>
      <Body3/>
      <Bottom1/>
      
      <Bottom2/>
   
      

    </div>
  );
}

export default App;
