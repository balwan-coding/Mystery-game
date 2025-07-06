import React from "react";
import Result from "./Result";

function QusAns({ result }) {
  return (
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
  );
}

export default QusAns;
