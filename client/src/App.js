import React, { useContext, useEffect, useState } from "react";
import { UberContext } from "./Context";
import { Login } from "./Login";
import { Testimonial, testimonial, Heading } from "./Testimonial";
import { NewSection } from "./NewSection";
import { Link } from "react-router-dom";
const indivisual = {};
export const App = () => {
  const [inputList, setInputList] = useState([]);
  const [compoNameArray, setCompoNameArray] = useState([]);
  const [componentCount, setComponentCount] = useState(0);
  const [compoIndex, setCompoIndex] = useState(0);
  const [indivisualCount, setIndivisualCount] = useState(0);
  const [selectedElement, setSelectedElement] = useState(1000);
  const [sequenceOfSelectedElement, setSequenceOfSelectedElement] = useState(
    -1
  );
  const [count, setCount] = useState(0);
  const {
    inputListLenght,
    setInputListLenght,
    testiObj,
    setChange,
    change,
    selectedElem
  } = useContext(UberContext);
  // SELECT CURRENT COMPONENT
  const selectComponentKey = (key) => {
    setComponentCount(key);
    console.log(key);
  };

  // ADD COMPONENT
  const onAddBtnClick = (Login, name) => {
    setCompoNameArray(compoNameArray.concat(name));
    setInputList(
      inputList.concat(
        <Login
          key={inputList.length}
          count={count}
          // selectComponentKey={selectComponentKey}
          // compoIndex={compoIndex}
        />
      )
    );
    setCount(count + 1);
    console.log(inputList);
  };

  const onAddBtnClick2 = (Login, name, getvalueAndComponent) => {
    if (selectedElement < 1000) {
      console.log("selectedElement");
      const index = testiObj.findIndex((object) => {
        return object.thisis == selectedElem;
      });
      testiObj[index]["array"].push(
        <Login
          key={inputList.length}
          index={inputListLenght}
          handleSubmit={getvalueAndComponent}
        />
      );
      setChange(change + 1);
      return;
    }
    setCompoNameArray(compoNameArray.concat(name));
    setInputList(
      inputList.concat(
        <Login
          key={inputList.length}
          index="0"
          handleSubmit={getvalueAndComponent}
        />
      )
    );
    console.log(inputList);
  };

  // REMOVE COMPONENT
  const removeComponent = () => {
    inputList.splice(sequenceOfSelectedElement, 1);
    compoNameArray.splice(sequenceOfSelectedElement, 1);
    setInputList([...inputList]);
    setCompoNameArray([...compoNameArray]);
  };

  // useEffect(()=>{
  //    setInputList(inputList)
  // },[inputList.length])

  useEffect(() => {
    console.log(compoNameArray);
  }, [compoNameArray]);

  const handleSubmit = (e, index) => {
    if (selectedElement < 1000) {
      testimonial[selectedElem][index] = e.currentTarget.textContent;
      console.log(".", testimonial[selectedElem]);
      return;
    }
    indivisual[inputList.length] = e.currentTarget.textContent;
    console.log(indivisual);
  };

  // useEffect(() => {
  //   console.log("s", selectedElement);
  // }, [selectedElement]);

  useEffect(() => {
    console.log("s", sequenceOfSelectedElement);
  }, [sequenceOfSelectedElement]);

  // RENDER ALL THE COMPONENTS
  return (
    <div>
      <button
        onClick={() => {
          setCompoIndex(compoIndex + 1);
          onAddBtnClick(NewSection, "newSection");
        }}
      >
        Add NewSection
      </button>
      <button
        onClick={() => {
          setCompoIndex(compoIndex + 1);
          onAddBtnClick(Testimonial, "testimonial");
        }}
      >
        Testimonial Component
      </button>

      <button
        onClick={(e) => {
          setCompoIndex(compoIndex + 1);
          setIndivisualCount(indivisualCount + 1);
          onAddBtnClick2(Heading, "h1", handleSubmit);
        }}
      >
        H1 Component
      </button>
      <button onClick={() => setSelectedElement(1000)}>
        remove selected index
      </button>

      <button onClick={() => removeComponent()}>remove</button>

      {inputList.map((data, key) => {
        return (
          <>
            {data.type == Heading ? (
              <div
                key={key}
                onClick={() => {
                  setSequenceOfSelectedElement(key);
                  setSelectedElement(1000);
                }}
              >
                {data}
              </div>
            ) : (
              <div
                key={key}
                onClick={() => {
                  setSequenceOfSelectedElement(key);
                  setSelectedElement(key);
                }}
              >
                {data}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};
