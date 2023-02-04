import React from "react";
import Button from "@mui/material/Button";

const Voice = (wordData) => {
    const data = wordData.wordData
    const handleClick = () => {
        const voice = new Audio(data[0].phonetics[0].audio)
        voice.play()
    }

  return (
    <>
      <span>Pronunciation</span>
      <Button color="primary" variant="outlined" type="submit" onClick={handleClick}>
        Play
      </Button>
    </>
  );
};

export default Voice;
