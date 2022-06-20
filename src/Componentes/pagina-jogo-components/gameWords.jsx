import React, { useEffect, useState, useRef } from "react";

export default function GameWords({ newList, numberOfWords, mode }) {
  const [currentNumberOfWords, setCurrentNumberOfWords] =
    useState(numberOfWords);

  const palavrasRef = useRef();
  const listRef = useRef();

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

  useEffect(() => {
    let words = palavrasRef.current;
    let list = listRef.current;

    switch (mode) {
      case "simp":
        words.style.color = "#33cc33";
        list.style.setProperty(
          "--beforeList",
          "linear-gradient(#33cc33, #33cc33, black, black)"
        );
        break;
      case "inter":
        words.style.color = "#ffa31a";
        list.style.setProperty(
          "--beforeList",
          "linear-gradient(#ffa31a, #ffa31a, black, black)"
        );
        break;
      case "avan":
        words.style.color = "crimson";
        list.style.setProperty(
          "--beforeList",
          "linear-gradient(crimson, crimson, black, black)"
        );
        break;
    }
  }, []);

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
        <span className="n-words" ref={palavrasRef}>
          <span className="number">{currentNumberOfWords}</span> Palavras
        </span>
        <div className="list" ref={listRef}>
          {list}
        </div>
      </div>
    </>
  );
}
