import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import mysteryImage from "../assets/bg-image-main-page.jpeg";
import { IoSettings } from "react-icons/io5";
import Setting from "./setting";

function FristIntro({ isVisible }) {
  const [isSettingOpen, setisSettingOpen] = useState(false);

  const handleSettingOpne = () => {
    setisSettingOpen(!isSettingOpen);
  };
  return (
    <div
      className={`w-full h-full bg-cover bg-center
              ${
                isVisible ? "visible" : "hidden"
              } flex items-center justify-center flex-col gap-5 relative`}
      style={{ backgroundImage: `url(${mysteryImage})` }}
    >
      <IoSettings
        className="text-4xl absolute top-3 left-3  active:rotate-95  cursor-pointer "
        onClick={handleSettingOpne}
      />

      <Setting isOpen={isSettingOpen} />

      <h1 className="animate-letter text-5xl font-semibold text-yellow-400 transition-all">
        Welcome To Gameing Worald
      </h1>

      <Link
        to="/levelF"
        className="text-white flex gap-3 rounded-lg items-center justify-center bg-green-500 p-3 text-2xl hover:text-black hover:bg-yellow-400"
      >
        Play Game <FaPlay />
      </Link>
    </div>
  );
}

export default FristIntro;
