import PropTypes from "prop-types";

function GuessedWords(props) {
  return <div data-test="component-guessed-words"></div>;
}
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default GuessedWords;
