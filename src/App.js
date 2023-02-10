import React from "react";
import "./App.css";
import WordForm from "./WordForm";
import ResultsPage from "./ResultsPage.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [wordResults, setWordResults] = useState("");
  const [searchedWord, setSearchedWord] = useState(" ");
  const [phonetic, setPhonetic] = useState("");
  const [wordExample, setExample] = useState(" ");
  const [wordMeaning, setMeaning] = useState(" ");
  const [wordDetails, setWordDetails] = useState([]);

  function handleUpdateResults(wordData) {
    setWordResults(wordData);
    // console.log(wordData);
    setSearchedWord(wordData[0].word);
    setPhonetic(wordData[0].phonetic);
    setExample(wordData[0].meanings[0].definitions[0].example);
    setMeaning(wordData[0].meanings[0].definitions[0].definition);
    setWordDetails(wordData[0]);
    console.log(wordDetails);
  }

  return (
    <div className="container">
      <div className="sub-cont">
        <div>
          <h1>Word Findr</h1>
        </div>
        <WordForm onHandleUpdate={handleUpdateResults} />
        <ResultsPage
          wordData={wordResults}
          ourWord={searchedWord}
          example={wordExample}
          meaning={wordMeaning}
          phonetic={phonetic}
          wordDetails={wordDetails}
        />
      </div>
      <ToastContainer />
    </div>
  );
}
export default App;
