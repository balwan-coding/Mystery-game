import React from "react";
import { MdDelete } from "react-icons/md";

function Silder({ history, setHistory, setSelectHistory }) {
  console.log(history);
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
              }}
              key={index}
              className="text-zinc-300 p-2 truncate hover:bg-zinc-500 hover:text-zinc-200 "
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Silder;
