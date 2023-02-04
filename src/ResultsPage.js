import React from "react";
import Voice from "./Voice";


function ResultsPage({ ourWord, example, meaning, wordData }) {
  return (
    <div className="results">
      <div className="word">
        {wordData ? <span className="tags">You searched for: </span> : null}
        {ourWord.toUpperCase()}
      </div>
      <div className="mean">
        {wordData ? <span className="tags">Meaning: </span> : null}
        {meaning}
      </div>
      <div className="eg">
        {wordData ? <span className="tags">Example: </span> : null}
        {example}
      </div>
      <Voice wordData={wordData}/>
    </div>
  );
}
export default ResultsPage;
