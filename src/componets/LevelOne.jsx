import React from "react";
import { Link } from "react-router-dom";

function LevelOne({ isVisible }) {
  return (
    <div
      className={`h-full
             bg-green-700 ${
               isVisible ? "visible" : "hidden"
             } flex items-center justify-center flex-col gap-5`}
    >
      <h2>Welcome to level one</h2>
      <Link
        to="/"
        className="text-white flex gap-3 rounded-lg items-center justify-center bg-yellow-500 p-3 text-2xl hover:text-black hover:bg-yellow-400"
      >
        Go to home
      </Link>
    </div>
  );
}

export default LevelOne;
