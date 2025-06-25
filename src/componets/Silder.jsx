import React from "react";

function Silder({ history }) {
  return (
    <div className="h-screen col-span-1 bg-zinc-700">
      <ul>
        <li>{history}</li>
      </ul>
    </div>
  );
}

export default Silder;
