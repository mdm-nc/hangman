type HangmanWordProps = {
  reveal ?: boolean; //optional
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({
  reveal=false,
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) {
  // const word = "test";
  // const guessedLetters = ["t", "e", "g"];

  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {/* Split word into letters; bottom border is underline */}
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
