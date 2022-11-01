import React from "react";
import { useState } from "react";

export default function App() {
  const [css, setCss] = useState({
    color: "green",
    fontSize: "12px",
    border: "1px solid red",
    width:"100%"
  });
  function changecsshandler(e, key) {
    console.log(e.target.value);
    console.log(typeof e.target.value);
    setCss({
      ...css,
      color: e.target.value
    });a
  }

  function changeheighthandler(e) {
    console.log(e.target.value + "px");
    setCss({
      ...css,
      fontSize: e.target.value+"px"
    });
  }
  function changewidthhandler(e){
    console.log(e.target.value + "px");
    setCss({
      ...css,
      width: e.target.value+"%"
    });    
  }
  
  return (
    <div className="App">
      <h1 style={css}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="color"
        placeholder="changecolor"
        // name="color"
        onChange={changecsshandler}
      />
      <input
        type="text"
        placeholder="ChangeHeight"
        onChange={changeheighthandler}
      />
      <input
        type="text"
        placeholder="ChangeWidth"
        onChange={changewidthhandler}
      />
    </div>
  );
}
