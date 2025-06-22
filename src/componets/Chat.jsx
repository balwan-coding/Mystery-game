import React from "react";

function Chat({ qustion, inputChange, btnClick, enterBtnClick, result }) {
  return (
    // AIzaSyC2NT2R8rDqRJCwLPEHSlQPQiuHpPdB790
    <div className="col-span-4 p-10">
      <div className="container h-3/5 overflow-auto ">
        <div className="text-white">
          <ul>
            {result && result.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
      <div className="bg-zinc-700 w-1/2  border border-zinc-500 pr-5 rounded-4xl text-white m-auto h-16  flex">
        <input
          type="text"
          placeholder="ASK ME ANYTHINK"
          className="w-full h-full p-3 outline-none"
          value={qustion}
          onChange={inputChange}
          onKeyDown={enterBtnClick}
        />
        <button onClick={btnClick}>ASK</button>
      </div>
    </div>
  );
}

export default Chat;
