import FristIntro from "./FristIntro";
import React, { useState } from "react";
import { RiRadioButtonLine } from "react-icons/ri";
import { Route, Routes } from "react-router-dom";
import LevelOne from "./LevelOne";

const Home = () => {
  const [color, setColor] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const handleChange = () => {
    setColor(!color);
    setIsVisible(!isVisible);
    setIsOn(!isOn);
  };
  return (
    <>
      <div className="border-50 border-gray-600 mt-0 mr-0 ml-0 mb-0  bg-black relative h-screen">
        <Routes>
          <Route index element={<FristIntro isVisible={isVisible} />}></Route>
          <Route
            path="/levelF"
            element={<LevelOne isVisible={isVisible} />}
          ></Route>
        </Routes>

        <button
          onClick={handleChange}
          className={` ${
            isOn ? "text-green-500" : "text-white"
          } text-2xl absolute -bottom-[34px] right-40 cursor-pointer duration-300`}
        >
          <RiRadioButtonLine />
        </button>

        <span
          className={` ${
            color ? "bg-red-500" : "bg-white"
          } p-2 border rounded-full absolute shadow-blue-900 shadow-2xs -bottom-[30px] right-28 duration-300 ease-in`}
        ></span>
      </div>
    </>
  );
};

export default Home;
