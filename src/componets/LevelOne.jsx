import React, { useState } from "react";
import { Link } from "react-router-dom";

function LevelOne({ isVisible }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };
  return (
    <div
      className={`h-full
             bg-green-700 ${
               isVisible ? "visible" : "hidden"
             } flex  flex-col gap-1`}
    >
      <div>
        <h2 className="text-yellow-500 mt-2 ml-2 text-2xl font-semibold ">
          Welcome to level one
        </h2>
        <Link
          to="/"
          className="text-white self-start flex mt-2 ml-2 gap-3 rounded-lg items-center justify-center bg-yellow-500 p-3 text-2xl hover:text-black hover:bg-yellow-400"
        >
          Go to home
        </Link>
      </div>

      <div className="bg-indigo-900 h-full relevite" onClick={handleClick}>
        <div
          className="bg-white h-1 w-7 absolute "
          style={{ left: position.x, top: position.y }}
        ></div>
      </div>
    </div>
  );
}

export default LevelOne;
