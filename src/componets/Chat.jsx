import React, { useEffect } from "react";
import Result from "./Result";
import Loding from "./Loding";
import QusAns from "./qusAns";

function Chat({ inputRef, isLoade, btnClick, enterBtnClick, result }) {
  return (
    <div className="col-span-4 p-10">
      <div className="container overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-gray-700 h-120 ">
        <div className="text-zinc-300 flex flex-col items-center ">
          <QusAns result={result} />
          {isLoade ? <Loding /> : null}
        </div>
      </div>
      <div className="bg-zinc-700 w-96 fixed left-1/2 bottom-10  border border-zinc-500 pr-5 rounded-4xl text-white m-auto h-16  flex">
        <input
          type="text"
          placeholder="ASK ME ANYTHINK"
          className="w-80 h-full p-3 outline-none"
          ref={inputRef}
          onKeyDown={enterBtnClick}
        />
        <button className="cursor-pointer" onClick={btnClick}>
          ASK
        </button>
      </div>
    </div>
  );
}

export default Chat;
