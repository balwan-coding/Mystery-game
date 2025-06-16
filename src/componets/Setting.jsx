import React from "react";

function Setting({ isOpen }) {
  return (
    <div
      className={`h-96 w-9/12 absolute top-30 left-1/2 -translate-x-1/2 z-50 
       rounded-2xl bg-gray-600/50 duration-500 ease-in-out transform transition-all
        ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }
      `}
      style={{
        boxShadow: "0 0 100px rgba(0, 191, 255, 0.5)",
      }}
    >
      jay ho
    </div>
  );
}

export default Setting;
