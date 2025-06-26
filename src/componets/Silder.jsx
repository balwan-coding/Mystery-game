import React from "react";

function Silder({ history }) {
  console.log(history);
  return (
    <div className="h-screen col-span-1 bg-zinc-700">
      <ul>
        {history &&
          history.map((item, index) => (
            <li key={index} className="text-white">
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Silder;
