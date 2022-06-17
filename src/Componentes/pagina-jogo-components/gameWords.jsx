import React from "react";

export default function gameWords({ listOfWords, numberOfWords }) {
  return (
    <>
      <div className="block-words">
        <span className="n-words">
          Palavras: <span className="number">{numberOfWords}</span>
        </span>
        <div className="list">
          {listOfWords.map((word, index) => (
            <p key={index} className={word + "-" + index}>
              {" "}
              {word}{" "}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
