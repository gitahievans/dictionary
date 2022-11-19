import React from "react";
import "./App.css";
import WordForm from "./WordForm";
import ResultsPage from "./ResultsPage.js";
import { useState } from "react";

function App() {
  const [wordResults, setWordResults] = useState("");

  const [searchedWord, setSearchedWord] = useState(" ");
  const [wordDetails, setDetails] = useState(" ");
  const [wordExample, setExample] = useState(" ");
  const [wordMeaning, setMeaning] = useState(" ");

  function handleUpdateResults(wordData) {
    setWordResults(wordData);
    console.log(wordData);

    setSearchedWord(wordData[0].word);
    console.log(searchedWord);
    // setDetails(wordData[0].meanings[0].definitions[0].antonyms);
    setExample(wordData[0].meanings[0].definitions[0].example);
    setMeaning(wordData[0].meanings[0].definitions[0].definition);
  }

  return (
    <div className="container">
      <h1>Simple Dictionary</h1>
      <WordForm onHandleUpdate={handleUpdateResults} />
      <ResultsPage
        wordData={wordResults}
        ourWord={searchedWord}
        details={wordDetails}
        example={wordExample}
        meaning={wordMeaning}
      />
    </div>
  );
}
export default App;
