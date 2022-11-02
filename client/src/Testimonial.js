import React, { useContext, useEffect, useMemo, useState } from "react";
import { UberContext } from "./Context";
import { HeadingElement } from "./Heading";
import { App } from "./App";
export const Heading = ({ index, handleSubmit }) => {
  return (
    <h1
      contentEditable
      suppressContentEditableWarning={true}
      onInput={(e) => handleSubmit(e, index)}
    >
      Heading
    </h1>
  );
};
export const testimonial = [
  // { isTestimonial: false },
  // { isTestimonial: "i dont kn" },
  // {}
];
export const Testimonial = ({ count }) => {
  const {
    setInputListLenght,
    inputListLenght,
    testiObj,
    change,
    setSelectedElem
  } = useContext(UberContext);
  const [inputList, setInputList] = useState([]);
  const [indivisualAdd, setIndivisualAdd] = useState([]);

  // const [testimonial, setTestimonial] = useState({isTestimonial: true })
  const handleSubmit = (e, key) => {
    // if(count >= testimonial.length-1){
    //   testimonial.push({})
    // }

    console.log("testimonialOBJ", testimonial[count]);
    testimonial[count][key] = e.currentTarget.textContent;
  };

  const onAddBtnClick = () => {
    console.log(testimonial);
    setInputList(
      inputList.concat(
        <Heading
          key={inputList.length}
          index={inputList.length + indivisualAdd.length + 1}
          handleSubmit={handleSubmit}
        />
      )
    );
  };

  function handleClick(e) {
    const id = e.target.id;
    console.log("id", id);
    setSelectedElem(id);
  }
  useEffect(() => {
    setInputListLenght(inputList.length + indivisualAdd.length + 1);
  }, [inputList.length, indivisualAdd.length]);
  useMemo(() => {
    testiObj.push({
      array: [],
      thisis: count
    });
  }, [count]);

  useEffect(() => {
    setIndivisualAdd(testiObj[count]["array"]);

    // console.log("this is inside useEffect", inputList);
  }, [change]);

  useEffect(() => {
    testimonial.push({});
  }, [count]);

  return (
    <>
      <div>
        <h1
          contentEditable
          suppressContentEditableWarning={true}
          onInput={(e) => handleSubmit(e, 0)}
          style={{ textAlign: "center" }}
          onClick={(e) => handleClick(e)}
          id={count}
        >
          Testimonial
        </h1>
        <button onClick={onAddBtnClick}>Add</button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          {inputList}
          {
            indivisualAdd.map((data, i) => {
              return <div key={i}>{data}</div>;
            })
            // indivisualAdd
          }
          {/* <HeadingElement  testimonial={testimonial} /> */}
        </div>
      </div>
    </>
  );
};
