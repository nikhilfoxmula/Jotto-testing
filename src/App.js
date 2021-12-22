import React, { useEffect } from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import "./App.css";
import Input from "./input";
import { getSecretWord } from "./actions";
function App() {
  const success = false;
  const secretWord = "party";
  const guessedWords = [];
  useEffect(() => {
    getSecretWord();
  }, []);
  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
