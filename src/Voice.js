import React from "react";
import Button from "@mui/material/Button";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Voice = (wordData) => {
  const notify = () => {
     toast.error("Pronunciation not provided", {
        position: toast.POSITION.TOP_RIGHT
      });
  }

  const data = wordData.wordData;
  const handleClick = () => {
    if (data[0].phonetics[0].audio) {
      const voice = new Audio(data[0].phonetics[0].audio);
      voice.play()
    }else{
      notify()
    }
  };

  return (
    <>
      <span className="tags">Pronunciation</span>
      <Button
        color="primary"
        variant="contained"
        type="submit"
        onClick={handleClick}
      >
        Play
      </Button>
    </>
  );
};

export default Voice;
