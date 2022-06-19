import React, { useEffect, useState } from "react";

export default function GameWords({ newList, numberOfWords }) {
  const [currentNumberOfWords, setCurrentNumberOfWords] =
    useState(numberOfWords);

  useEffect(() => {
    let wordCompleted;
    newList.forEach((word) => {
      wordCompleted = document.querySelector("." + word.name);
      if (word.completed === true && wordCompleted != undefined) {
        wordCompleted.setAttribute("class", "riscada");
        setCurrentNumberOfWords((prevNumberOfWords) => {
          return prevNumberOfWords - 1;
        });
      }
    });
  }, [newList]);

  const [list, setNewList] = useState(
    newList.map((word, index) => (
      <span key={index} className={word.name}>
        {" "}
        {word.name}{" "}
      </span>
    ))
  );

  return (
    <>
      <div className="block-words">
        <span className="n-words">
          <span className="number">{currentNumberOfWords}</span> Palavras
        </span>
        <div className="list">{list}</div>
      </div>
    </>
  );
}
