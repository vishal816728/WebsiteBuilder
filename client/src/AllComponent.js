import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Another } from "./Another";
import { Products } from "./Products";
import { App } from "./App";

export const AllComponent = () => {
  const [routeList, setRouteList] = useState([]);
  const [pathName, setPathName] = useState("");
  const [elementName, setElementName] = useState("");

  let navigate = useNavigate();

  // ADD ROute
  const onAddBtnClickRoute = (PathName, ComponentName) => {
    console.log("click");
    setRouteList(
      routeList.concat(<Route path={PathName} element={<ComponentName />} />)
    );
    // setPathName(pathName);
    // setElementName(ComponentName);
    setTimeout(() => {
      navigate(PathName);
    }, 2000);
    console.log(routeList);
  };

  return (
    <>
      <button onClick={() => onAddBtnClickRoute("/Products", Products)}>
        Add Route
      </button>
      <Routes>
        <Route
          path="/"
          element={<App onAddBtnClickRoute={onAddBtnClickRoute} />}
        />
        {/* <Route path={pathName} element={<elementName />}/> */}

        {routeList.map((data, key) => {
          return <>{data}</>;
        })}
      </Routes>
    </>
  );
};
