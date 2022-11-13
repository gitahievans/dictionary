import React from "react";
import search from "./pictures/search.png";
import { useState } from "react";

function WordForm({ onHandleUpdate }) {
  const [word, setWord] = useState(" ");

  function handleSearch(e) {
    setWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((wordData) => onHandleUpdate(wordData));
    setWord(" ");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type word"
        value={word}
        onChange={handleSearch}
      />
      <button id="searcher">
        <img src={search} alt="Search" />
      </button>
    </form>
  );
}
export default WordForm;
