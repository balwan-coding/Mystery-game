import React, { useEffect } from "react";
import Result from "./Result";

function Chat({ inputRef, btnClick, enterBtnClick, result }) {
  return (
    <div className="col-span-4 p-10">
      <div className="container h-130 overflow-auto ">
        <div className="text-zinc-300">
          <ul>
            {result.map((item, index) => (
              <div
                key={index + Math.random()}
                className={item.type === "q" ? "flex justify-end" : ""}
              >
                {item.type === "q" ? (
                  <li
                    className="p-2 mb-3 text-right text-white text-lg mr-2 border-2 border-zinc-600 bg-zinc-600 w-fit rounded-tr-4xl rounded-bl-4xl"
                    key={index + Math.random()}
                  >
                    <Result
                      index={index}
                      ans={item.text}
                      totalResult={1}
                      type={item.type}
                    />
                  </li>
                ) : (
                  item.text.map((ansItem, ansIndex) => (
                    <li className="p-1" key={ansIndex + Math.random()}>
                      <Result
                        type={item.type}
                        index={ansIndex}
                        ans={ansItem}
                        totalResult={item.text.length}
                      />
                    </li>
                  ))
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-zinc-700 w-1/2  border border-zinc-500 pr-5 rounded-4xl text-white m-auto h-16  flex">
        <input
          type="text"
          placeholder="ASK ME ANYTHINK"
          className="w-full h-full p-3 outline-none"
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
