import React, { useState, useEffect } from "react";

const TypingAnimation = ({
  text,
  speed = 100,
  pause = 2500,
  mistakeChance = 0.1,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [mistakeMade, setMistakeMade] = useState(false);
  const [backspaceCount, setBackspaceCount] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        if (!mistakeMade && Math.random() < mistakeChance) {
          // Make a mistake: add a random character
          const randomChar = String.fromCharCode(
            97 + Math.floor(Math.random() * 26)
          );
          setDisplayedText((prev) => prev + randomChar);
          setMistakeMade(true);
          setBackspaceCount(Math.floor(Math.random() * 1) + 1); // 1 to 2 backspaces
        } else if (mistakeMade && backspaceCount > 0) {
          // Press backspace
          setDisplayedText((prev) => prev.slice(0, -1));
          setBackspaceCount(backspaceCount - 1);
        } else if (mistakeMade && backspaceCount === 0) {
          // Correct the mistake by typing the correct character
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
          setMistakeMade(false);
        } else {
          // Type the correct character
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, pause);
      return () => clearTimeout(pauseTimeout);
    }
  }, [index, text, speed, pause, mistakeMade, backspaceCount, mistakeChance]);

  return <span>{displayedText}</span>;
};

export default TypingAnimation;
