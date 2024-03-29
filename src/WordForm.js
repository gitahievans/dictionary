import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function WordForm({ onHandleUpdate }) {
  const [word, setWord] = useState(" ");

  function handleSearch(e) {
    setWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((wordData) => {
        onHandleUpdate(wordData);
      });  
      setWord("");
  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        className="sbar"
        value={word}
        id="outlined-basic"
        type="text"
        onChange={handleSearch}
      />
      <Button color="primary" variant="contained" type="submit">
        Search
      </Button>
    </form>
  );
}
export default WordForm;
