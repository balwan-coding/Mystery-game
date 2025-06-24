import React, { useState } from "react";
import Silder from "./Silder";
import Chat from "./Chat";
import { URL } from "../data/Url";

function Home() {
  const [qustion, setQustion] = useState("");
  const [showResult, setShowResut] = useState([]);

  const handleOnChange = (event) => {
    setQustion(event.target.value);
  };

  const paylode = {
    contents: [
      {
        parts: [
          {
            text: qustion,
          },
        ],
      },
    ],
  };
  const askQustion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(paylode),
    });

    response = await response.json();
    let responseResult = response.candidates[0].content.parts[0].text;
    responseResult = responseResult.split("* ");
    responseResult = responseResult.map((item) => item.trim());
    setShowResut([
      ...showResult,
      { type: "q", text: qustion },
      { type: "a", text: responseResult },
    ]);
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      askQustion();
    }
  };
  return (
    <div className="h-screen bg-zinc-800">
      <div className="grid grid-cols-5  ">
        <Silder />
        <Chat
          qustion={qustion}
          inputChange={handleOnChange}
          btnClick={askQustion}
          enterBtnClick={handleOnKeyDown}
          result={showResult}
        />
      </div>
    </div>
  );
}

export default Home;
