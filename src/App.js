import React from "react";
import "./App.css";
import WordForm from "./WordForm";
import ResultsPage from "./ResultsPage.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [wordResults, setWordResults] = useState("");
  const [searchedWord, setSearchedWord] = useState(" ");
  const [phonetic, setPhonetic] = useState("")
  const [wordExample, setExample] = useState(" ");
  const [wordMeaning, setMeaning] = useState(" ");

  function handleUpdateResults(wordData) {
    setWordResults(wordData);
    setSearchedWord(wordData[0].word);
    setPhonetic(wordData[0].phonetic);
    console.log(phonetic);
    setExample(wordData[0].meanings[0].definitions[0].example);
    setMeaning(wordData[0].meanings[0].definitions[0].definition);
  }

  return (
    <div className="container">
      <div className="sub-cont">
        <div>
          <h1>Simple Dictionary</h1>
        </div>
        <WordForm onHandleUpdate={handleUpdateResults} />
        <ResultsPage
          wordData={wordResults}
          ourWord={searchedWord}
          example={wordExample}
          meaning={wordMeaning}
          phonetic={phonetic}
        />
      </div>
      <ToastContainer />
    </div>
  );
}
export default App;
