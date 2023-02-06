import React from "react";
import Voice from "./Voice";

function ResultsPage({ phonetic, ourWord, example, meaning, wordData }) {
 console.log(wordData.title)
  return (
    <>
      {wordData.title ? (
        <div className="nfound">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3350/3350122.png"
            alt="not found"
          />
          <p className="sorry">{wordData.message.slice(0, -1)}!</p>
        </div>
      ) : (
        <div className="results">
          <div className="word">
            {wordData ? (
              <>
                <p>{ourWord.toUpperCase()}</p> <p>{phonetic}</p>
              </>
            ) : null}
          </div>

          <div className="mean">
            {wordData ? <span className="tags">Meaning: </span> : null}
            <span>{meaning}</span>
          </div>
          <div className="eg">
            {wordData ? <span className="tags">Example: </span> : null}
            <span className="res">{example}</span>
          </div>
          {wordData ? (
            <div className="voice">
              <Voice wordData={wordData} />{" "}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
export default ResultsPage;
