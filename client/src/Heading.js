import React, { useState } from "react";
import { Heading } from "./Testimonial";

export const handleSubmit = (e, key) => {
  // console.log(key);
  testimonial[key] = e.currentTarget.textContent;
  console.log(testimonial);
};
export const HeadingElement = ({ testimonial }) => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = () => {
    console.log(testimonial);
    setInputList(
      inputList.concat(
        <Heading
          key={inputList.length}
          index={inputList.length + 1}
          handleSubmit={handleSubmit}
        />
      )
    );
  };
  return (
    <>
      <button onClick={onAddBtnClick}>Add</button>
      {inputList}
    </>
  );
};
