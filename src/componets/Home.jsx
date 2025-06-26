import React, { useEffect, useRef, useState } from "react";
import Silder from "./Silder";
import Chat from "./Chat";
import { URL } from "../data/Url";
import Alert from "./Alert";

function Home() {
  const inputRef = useRef();
  const [showResult, setShowResut] = useState([]);
  const [resentHistory, setResentHistory] = useState(
    JSON.parse(localStorage.getItem("history"))
  );
  const [showAlert, setShowAlert] = useState(false);
  const [selectHistory, setSelectHistory] = useState("");

  const hnandleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3 * 1000);
  };

  const askQustion = async () => {
    const questionText = inputRef.current.value.trim();
    if (questionText.length === 0) {
      hnandleShowAlert();
      return;
    }

    if (localStorage.getItem("history")) {
      let history = JSON.parse(localStorage.getItem("history"));
      history = [questionText, ...history];
      localStorage.setItem("history", JSON.stringify(history));
      setResentHistory(history);
    } else {
      localStorage.setItem("history", JSON.stringify([questionText]));
      setResentHistory([questionText]);
    }

    const paylode = {
      contents: [
        {
          parts: [
            {
              text: questionText,
            },
          ],
        },
      ],
    };

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
      { type: "q", text: questionText },
      { type: "a", text: responseResult },
    ]);
    setQustion("");
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      askQustion();
    }
  };

  useEffect(() => {
    console.log(selectHistory);
  }, [selectHistory]);
  return (
    <div className="h-screen bg-zinc-800">
      <div className="grid grid-cols-5 relative  ">
        <Silder
          history={resentHistory}
          setHistory={setResentHistory}
          setSelectHistory={setSelectHistory}
        />
        <Chat
          inputRef={inputRef}
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
