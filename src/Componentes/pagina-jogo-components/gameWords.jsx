import React from "react";

export default function gameWords({ listOfWords, numberOfWords }) {
  return (
    <>
      <div className="block-words">
        <span className="n-words">
          <span className="number">{numberOfWords}</span> Palavras
        </span>
        <div className="list">
          {listOfWords.map((word, index) => (
            <span key={index} className={word + "-" + index}>
              {" "}
              {word}{" "}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
