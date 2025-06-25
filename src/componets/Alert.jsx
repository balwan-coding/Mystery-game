import React from "react";

function Alert({ message }) {
  return (
    <div className="text-white p-2 rounded-2xl absolute right-1/2 top-7 bg-red-600">
      <h1>{message}</h1>
    </div>
  );
}

export default Alert;
