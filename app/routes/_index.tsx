import { useEffect, useRef, useState } from "react"
import { HexContainer } from "~/components/HexContainer";
import { HintsModal } from "~/components/HintsModal";
import { NewGameModal } from "~/components/NewGameModal";
import { SolutionModal } from "~/components/SolutionModal";
import { wordList } from '~/svenska-ord';

export default function Index() {

  const [letters, setLetters] = useState("huckey");
  const [requiredLetter, setRequiredLetter] = useState("s");
  const [possibleWords, setPossibleWords] = useState<string[]>([]);
  const [pangrams, setPangrams] = useState<string[]>([]);
  const [wordsFound, setWordsFound] = useState<string[]>([]);
  const [guess, setGuess] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const timerId = useRef<number | null>(null); 

  useEffect(() => {
    findPossibleWords();
  }, [letters, requiredLetter]);

  useEffect(() => {
    // Add a keypress event listener to the window
    window.addEventListener('keydown', handleKeyPress);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [guess]);

  useEffect(() => { 
    if (message) { 
      //Creating a timeout 
      timerId.current = window.setTimeout(() => { 
          setMessage(null);
      }, 1000); 
    } 

    return () => { 
      //Clearing a timeout 
      if (timerId.current !== null) {
        window.clearTimeout(timerId.current); 
      }
    }; 
  }, [message]); 

  // Function to handle keypress events
  const handleKeyPress = (event: KeyboardEvent) => {
    // Check if the Enter key (key code 13) is pressed
    if (event.key === 'Enter') {
      performGuess();
    }
    if (event.key === 'Backspace') {
      setGuess((prev) => prev.slice(0, -1));
    }
    // Check if the pressed key is a character key
    if (isCharacterKey(event.key)) {
      setGuess((prev) => prev + event.key);
    }
  };

  // Function to check if the pressed key is a character key
  const isCharacterKey = (key: string) => {
    // You can use regular expressions or any other method to check if the key is a character key
    const characterKeyPattern = /^[a-zA-ZåäöÅÄÖ]$/;
    return characterKeyPattern.test(key);
  };

  const findPossibleWords = () => {
    const pattern = new RegExp(`^[${letters}${requiredLetter}]*$`);

    const allPossibleWords = wordList.filter(word => word.length > 3 && word.includes(requiredLetter) && pattern.test(word));
    setPossibleWords(allPossibleWords);

    const lettersArray = letters.split("");
    const pangrams = allPossibleWords.filter((word) => 
      word.includes(requiredLetter) && lettersArray.every((letter) => word.includes(letter))
    )
    setPangrams(pangrams);
  }

  const performGuess = () => {
    // Ordet är för kort
    if (guess.length < 4) {
      setMessage("För kort!");
      return;
    }

    // Ordet saknar guldbokstaven
    if (!guess.includes(requiredLetter)) {
      setMessage("Mittenbokstav saknas!");
      return;
    }

    // Ordet redan hittat
    if (wordsFound.includes(guess)) {
      setMessage("Redan hittat!");
      return;
    }

    // Ordet finns inte i listan
    if (!possibleWords.includes(guess)) {
      setMessage("Finns inte!");
      return;
    }

    // Ordet är rätt
    if (possibleWords.includes(guess)) {
      setMessage("Snyggt!");
      setWordsFound((prev) => [...prev, guess]);
    }

    setGuess("");
  }

  const getProgress = () => {
    return Math.ceil((wordsFound.length / possibleWords.length) * 100);
  }

  const newGame = (letters: string, requiredLetter: string) => {
    setLetters(letters);
    setRequiredLetter(requiredLetter);
    setWordsFound([]);
    setGuess("");
    setMessage(null);
  }

  function scrambleLetters(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();

    const lettersArray = letters.split("");
    const scrambledLetters = lettersArray.sort(() => Math.random() - 0.5).join("");
    setLetters(scrambledLetters);
  }

  return (
    <main className="w-screen h-screen flex justify-center pt-2">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center">
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-base font-medium">Nybörjare</span>
            <span className="text-sm font-medium">{wordsFound.length} / {possibleWords.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-orange-300 h-2.5 rounded-full" style={{ width: `${getProgress()}%` }}></div>
          </div>

          <div className="relative mt-8">
            <h2 className="w-full flex justify-center items-center">
              {
                guess.split("").map((letter, index) => (
                  <span key={index} className="text-2xl font-bold flex">{letter.toUpperCase()}</span>
                ))
              }
              <span className="text-orange-300 text-4xl -mt-2 animate-blink">|</span>
            </h2>
            {
              message && (
                <div className="absolute flex justify-center w-full z-30 -mt-14">
                  <h2 className="bg-black text-white w-fit rounded px-3 py-1">
                    {message}
                  </h2>
                </div>
              )
            }
          </div>
        </div>

        <HexContainer letters={letters.split("")} requiredLetter={requiredLetter} />

        <div className="flex space-x-4 mt-20 w-full">
          <NewGameModal onClose={newGame} />
          <div className="flex justify-center w-full">
            <button
              className="border border-yellow-400 py-3 px-4 rounded-full active:bg-gray-100 disabled:active:bg-white select-none"
              type="button"
              onClick={scrambleLetters}
            >
              Blanda
            </button>
          </div>
          <HintsModal possibleWords={possibleWords} pangrams={pangrams} />
          <SolutionModal possibleWords={possibleWords} wordsFound={wordsFound} />
        </div>
      </div>

      <div className="flex ml-16 space-x-4">
        <div className="flex flex-col">
          <h2 className="font-bold">Hittade ord</h2>
          {
            wordsFound.sort((a,b) => a.length - b.length).map((word, index) => (
              <div key={index}>
                <h2>{word}</h2>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
}
