import React from "react";

function ResultsPage({ ourWord, example, meaning }) {
  return (
    <div className="results">
      <div className="word-searched">
        <h4>Word:</h4>
        {ourWord}
      </div>

      <div className="word-meaning">
        <h4>Definition:</h4>
        {meaning}
      </div>

      <div className="example">
        <h4>Example:</h4>
        {example}
      </div>
    </div>
  );
}
export default ResultsPage;
