import React from "react";
import Voice from "./Voice";

function ResultsPage({phonetic, ourWord, example, meaning, wordData }) {
  return (
    <div className="results">
      <div className="word">
        {wordData ? <><p>{ourWord.toUpperCase()}</p> <p>{phonetic}</p></> : null}
      </div>
      <div className="mean">
        {wordData ? <span className="tags">Meaning: </span> : null}
        {meaning}
      </div>
      <div className="eg">
        {wordData ? <span className="tags">Example: </span> : null}
        {example}
      </div>
      {wordData ? (
        <div className="voice">
          <Voice wordData={wordData} />{" "}
        </div>
      ) : null}
    </div>
  );
}
export default ResultsPage;
