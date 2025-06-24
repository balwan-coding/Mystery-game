import React, { useEffect, useState } from "react";

function Result({ ans, index, totalResult }) {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  function checkHeading(str) {
    return /^(\*)(\*)(.*)\*$/.test(str);
  }

  function replaceHeadingStars(str) {
    return str.replace(/^(\*)(\*)|(\*)\$/g, "");
  }

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStars(ans));
    }
  }, []);

  return (
    <>
      {index === 0 && totalResult > 1 ? (
        <span className="text-xl text-white font-bold">{answer}</span>
      ) : heading ? (
        <span className="font-bold pt-5 text-lg block text-white">
          {answer}
        </span>
      ) : (
        <span className="pl-5 block">{answer}</span>
      )}
    </>
  );
}

export default Result;
