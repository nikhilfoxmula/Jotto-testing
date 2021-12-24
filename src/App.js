import React, { useEffect } from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import "./App.css";
import Input from "./input";
import { getSecretWord } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const success = useSelector((state) => state.success);
  const guessedWords = useSelector((state) => state.guessedWords);
  const secretWord = useSelector((state) => state.secretWord);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSecretWord());
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
