import React from "react";
import PropTypes from "prop-types";

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  console.log(secretWord);
  if (success) {
    return <div data-test="component-input" />;
  }
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          type="text"
          placeholder="Enter your guess"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          onChange={(e) => setCurrentGuess(e.target.value)}
          value={currentGuess}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
  success: PropTypes.string,
};
export default Input;
