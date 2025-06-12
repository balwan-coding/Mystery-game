import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

function FristIntro({ isVisible }) {
  return (
    <div
      className={`h-full
             bg-indigo-700 ${
               isVisible ? "visible" : "hidden"
             } flex items-center justify-center flex-col gap-5`}
    >
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
