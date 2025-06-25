import React, { useState } from "react";
import Silder from "./Silder";
import Chat from "./Chat";
import { URL } from "../data/Url";
import Alert from "./Alert";

function Home() {
  const [qustion, setQustion] = useState("");
  const [showResult, setShowResut] = useState([]);
  const [resentHistory, setResentHistory] = useState("MAYA IS COME ON TO");
  const [showAlert, setShowAlert] = useState(false);

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
    if (qustion.length === 0) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3 * 1000);
      return;
    }
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
      <div className="grid grid-cols-5 relative  ">
        <Silder history={resentHistory} />
        <Chat
          qustion={qustion}
          inputChange={handleOnChange}
          btnClick={askQustion}
          enterBtnClick={handleOnKeyDown}
          result={showResult}
        />
        {showAlert && <Alert message={"please enter some content"} />}
      </div>
    </div>
  );
}

export default Home;
