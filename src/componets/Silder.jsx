import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

function Silder({ history, setHistory, setSelectHistory }) {
  const [isColor, setIsColor] = useState(null);
  return (
    <div className="h-screen col-span-1 bg-zinc-700">
      <div className="flex p-3 justify-between">
        <h2 className="text-zinc-100 text-xl font-bold">Reset History</h2>
        <button
          onClick={() => {
            localStorage.clear(), setHistory([]);
          }}
          className="text-2xl text-zinc-100 cursor-pointer font-bold hover:text-red-500"
        >
          <MdDelete />
        </button>
      </div>
      <ul>
        {history &&
          history.map((item, index) => (
            <li
              onClick={() => {
                setSelectHistory(item);
                setIsColor(index);
              }}
              key={index}
              className={`${
                isColor === index
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "text-zinc-300  hover:bg-zinc-500 hover:text-zinc-200"
              }  cursor-pointer p-2 truncate font-semibold first-letter:uppercase`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Silder;
