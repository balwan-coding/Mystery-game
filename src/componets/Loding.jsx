import React from "react";

function Loding() {
  return (
    <div className="w-[50px] h-[50px] transform  flex items-center m-2 justify-center">
      <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-pink-400 to-blue-700 flex items-center justify-center animate-spin-reverse">
        <div className="w-[40px] h-[40px] bg-zinc-800 rounded-full flex items-center justify-center">
          <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-pink-400 to-blue-700 flex items-center justify-center animate-spin">
            <div className="w-[20px] h-[20px] bg-zinc-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loding;
