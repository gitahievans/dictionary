import React from "react";
import Voice from "./Voice";
import Meaning from "./Meaning";

function ResultsPage({
  wordDetails,
  phonetic,
  ourWord,
  example,
  meaning,
  wordData,
}) {
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

          <div className="mean">{wordData ? <Meaning /> : null}</div>
          <div className="eg">
            {wordData ? <span className="tags">Example: </span> : null}
            {example ? (
              <span className="res">{example}</span>
            ) : (
              <span className="noeg">None given</span>
            )}
          </div>
          {wordData ? (
            <div className="voice">
              <Voice wordData={wordData} />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
export default ResultsPage;
