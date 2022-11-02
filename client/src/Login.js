import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { UberContext } from "./Context";

const Input = ({ type2 }) => {
  return <input placeholder="Your input here" type={type2} />;
};

// const login = {};
export const Login = () => {
  const [inputList, setInputList] = useState([]);
  const [count, setCount] = useState(0);
  const { login } = useContext(UberContext);

  const onAddBtnClick = (event, type) => {
    login[count] = type;
    setCount(count + 1);
    setInputList(
      inputList.concat(<Input key={inputList.length} type2={type} />)
    );
  };
  useEffect(() => {
    console.log(login);
  }, [count]);

  return (
    <div>
      <button onClick={(event) => onAddBtnClick(event, "file")}>
        Add input
      </button>
      <button onClick={(event) => onAddBtnClick(event, "date")}>
        Date input
      </button>

      {inputList}
    </div>
  );
};
