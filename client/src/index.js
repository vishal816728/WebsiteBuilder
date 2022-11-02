import React, { useState } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { UberProvider } from "./Context";
import { Login } from "./Login";
import {BrowserRouter} from 'react-router-dom'
import './styles.css'
import { AllComponent } from "./AllComponent";

const Input = () => {
  return <input placeholder="Your input here" />;
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event, type) => {
    setInputList(
      inputList.concat(<Input key={inputList.length} type={type} />)
    );
  };

  return (
    <BrowserRouter>
    <UberProvider>
      <App />
      {/* <AllComponent /> */}
    </UberProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Form />, document.getElementById("form"));
