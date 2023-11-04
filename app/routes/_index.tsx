import { MouseEventHandler, useEffect, useRef, useState } from "react"
import { wordList } from '~/svenska-ord';

type NewGameModalProps = {
  onClose: (letters: string, requiredLetter: string) => void;
}

const NewGameModal = (props: NewGameModalProps) => {
  const { onClose } = props;

  const [letters, setLetters] = useState("");
  const [requiredLetter, setRequiredLetter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const closeOnBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose(letters, requiredLetter);
    setShowModal(false);
  }

  return (
    <>
      <div className="flex justify-center w-full">
        <button
          className="border border-yellow-400 py-3 px-4 rounded-full active:bg-gray-100 disabled:active:bg-white select-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Nytt spel
        </button>
      </div>
      {showModal ? (
        <>
          <div onClick={closeOnBackdropClick} className="bg-slate-500 bg-opacity-75 transition-opacity opacity-100 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 dark:bg-slate-800 opacity-100 translate-y-0 sm:scale-100">
                <button onClick={() => setShowModal(false)} aria-pressed="false" className="absolute right-4 top-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 cursor-pointer dark:stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
                <div>
                  <div className="text-center">
                    <h3 className="text-lg leading-6 font-medium text-slate-900 dark:text-slate-100" id="headlessui-dialog-title-:r5:">
                      Välj bokstäver
                    </h3>
                    <div className="mt-8">
                      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                        <div className="flex flex-col">
                          <label htmlFor="letters" className="text-sm font-medium text-gray-700 dark:text-slate-100">
                            Bokstäver
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="letters"
                              id="letters"
                              className="outline-none shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-slate-700 dark:border-slate-700 dark:text-slate-100"
                              placeholder="iolnfk"
                              value={letters}
                              onChange={(event) => setLetters(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col mt-2">
                          <label htmlFor="requiredLetter" className="text-sm font-medium text-gray-700 dark:text-slate-100">
                            Mittenbokstav
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="requiredLetter"
                              id="requiredLetter"
                              className="outline-none shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-slate-700 dark:border-slate-700 dark:text-slate-100"
                              placeholder="r"
                              value={requiredLetter}
                              onChange={(event) => setRequiredLetter(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex justify-center mt-2">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                          >
                            Starta
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );

}

type HintsModalProps = {
  possibleWords: string[];
  pangrams: string[];
}

const HintsModal = (props: HintsModalProps) => {
  const { possibleWords, pangrams } = props;

  const [showModal, setShowModal] = useState(false);

  const closeOnBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <button
          className="border border-yellow-400 py-3 px-4 rounded-full active:bg-gray-100 disabled:active:bg-white select-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Ledtrådar
        </button>
      </div>
      {showModal ? (
        <>
          <div onClick={closeOnBackdropClick} className="bg-slate-500 bg-opacity-75 transition-opacity opacity-100 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 dark:bg-slate-800 opacity-100 translate-y-0 sm:scale-100">
                <button onClick={() => setShowModal(false)} aria-pressed="false" className="absolute right-4 top-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 cursor-pointer dark:stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
                <div>
                  <div className="text-center">
                    <h3 className="text-lg leading-6 font-medium text-slate-900 dark:text-slate-100" id="headlessui-dialog-title-:r5:">
                      Dagens ledtrådar!
                    </h3>
                    <div className="mt-2">
                      <div className="p-2">
                        <p className="text-lg font-semithin dark:text-slate-100">
                          Detta pussel har {possibleWords.length} ord.
                        </p>
                        <p className="text-lg font-semithin dark:text-slate-100">
                          Det finns {pangrams.length} pangram.
                        </p>
                      </div>
                      <h2 className="text-xl font-medium pb-1 dark:text-slate-100">
                        Antal ord för varje antal bokstäver
                      </h2>
                      <div className="how-to-section pb-3">
                        <p className="font-semithin dark:text-slate-100">
                          Fyra bokstäver: <span className="font-medium">{possibleWords.filter(word => word.length === 4).length}</span>
                        </p>
                        <p className="font-semithin dark:text-slate-100">
                          Fem bokstäver: <span className="font-medium">{possibleWords.filter(word => word.length === 5).length}</span>
                        </p>
                        <p className="font-semithin dark:text-slate-100">
                          Sex bokstäver: <span className="font-medium">{possibleWords.filter(word => word.length === 6).length}</span>
                        </p>
                        <p className="font-semithin dark:text-slate-100">
                          Sju bokstäver: <span className="font-medium">{possibleWords.filter(word => word.length === 7).length}</span>
                        </p>
                        <p className="font-semithin dark:text-slate-100">
                          Åtta eller fler bokstäver: <span className="font-medium">{possibleWords.filter(word => word.length >= 8).length}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default function Index() {

  const [letters, setLetters] = useState("iolnfk");
  const [requiredLetter, setRequiredLetter] = useState("r");
  const [possibleWords, setPossibleWords] = useState<string[]>([]);
  const [pangrams, setPangrams] = useState<string[]>([]);
  const [wordsFound, setWordsFound] = useState<string[]>([]);
  const [guess, setGuess] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const timerId = useRef<number | null>(null); 

  useEffect(() => {
    findPossibleWords();
    getPangrams();
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
    const characterKeyPattern = /^[a-zA-Z]$/;
    return characterKeyPattern.test(key);
  };

  const findPossibleWords = () => {
    const pattern = new RegExp(`^[${letters}${requiredLetter}]*$`);

    const allPossibleWords = wordList.filter(word => word.length > 3 && word.includes(requiredLetter) && pattern.test(word));
    setPossibleWords(allPossibleWords);
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

  const getPangrams = () => {
    const pattern = new RegExp(`^(?=.*${letters[0]})(?=.*${letters[1]})(?=.*${letters[2]})(?=.*${letters[3]})(?=.*${letters[4]})(?=.*${letters[5]})(?=.*${requiredLetter})[${letters}${requiredLetter}]*$`);
    setPangrams(possibleWords.filter(word => pattern.test(word)));
  }

  const newGame = (letters: string, requiredLetter: string) => {
    setLetters(letters);
    setRequiredLetter(requiredLetter);
    setWordsFound([]);
    setGuess("");
    setMessage(null);
  }

  const hex = {
    display: "flex",
    marginTop: "64px",
    marginRight: "-12px",
    marginLeft: "-5px",
    marginBottom: "-57px",
  }

  const hexTop = {
    display: "flex",
    width: 0,
    borderRight: "calc(30px * .75) solid #e4e4e7",
    borderTop: "calc(.75*52px) solid transparent",
    borderBottom: "calc(.75*52px) solid transparent",
  }

  const hexBottom = {
    display: "flex",
    width: 0,
    borderLeft: "calc(30px * .75) solid #e4e4e7",
    borderTop: "calc(.75*52px) solid transparent",
    borderBottom: "calc(.75*52px) solid transparent",
  }

  const hexCenterTop = {
    display: "flex",
    width: 0,
    borderRight: "calc(30px * .75) solid #fde047",
    borderTop: "calc(.75*52px) solid transparent",
    borderBottom: "calc(.75*52px) solid transparent",
  }

  const hexCenterBottom = {
    display: "flex",
    width: 0,
    borderLeft: "calc(30px * .75) solid #fde047",
    borderTop: "calc(.75*52px) solid transparent",
    borderBottom: "calc(.75*52px) solid transparent",
  }

  return (
    <main className="w-screen h-screen flex justify-center">
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

        <div className="flex items-center">
          <div className="flex flex-col">
            <div style={hex}>
              <div style={hexTop}></div>
              <div className="w-[45px] h-[78px] flex flex-col justify-center items-center bg-zinc-200">
                <h2 className="text-2xl font-bold">{letters[0].toUpperCase()}</h2>
              </div>
              <div style={hexBottom}></div>
            </div>
            <div style={hex}>
              <div style={hexTop}></div>
              <div className="w-[45px] h-[78px] flex flex-col justify-center items-center bg-zinc-200">
                <h2 className="text-2xl font-bold">{letters[1].toUpperCase()}</h2>
              </div>
              <div style={hexBottom}></div>
            </div>
          </div>

          <div className="flex flex-col">
            <div style={hex}>
              <div style={hexTop}></div>
              <div className="w-[45px] h-[78px] flex flex-col justify-center items-center bg-zinc-200">
                <h2 className="text-2xl font-bold">{letters[2].toUpperCase()}</h2>
              </div>
              <div style={hexBottom}></div>
            </div>
            <div style={hex}>
              <div style={hexCenterTop}></div>
              <div className="w-[45px] h-[78px] flex flex-col justify-center items-center bg-yellow-300">
                <h2 className="text-2xl font-bold">{requiredLetter.toUpperCase()}</h2>
              </div>
              <div style={hexCenterBottom}></div>
            </div>
            <div style={hex}>
              <div style={hexTop}></div>
              <div className="w-[45px] h-[78px] flex flex-col justify-center items-center bg-zinc-200">
                <h2 className="text-2xl font-bold">{letters[3].toUpperCase()}</h2>
              </div>
              <div style={hexBottom}></div>
            </div>
          </div>

          <div className="flex flex-col">
            <div style={hex}>
              <div style={hexTop}></div>
              <div className="w-[45px] h-[78px] flex flex-col justify-center items-center bg-zinc-200">
                <h2 className="text-2xl font-bold">{letters[4].toUpperCase()}</h2>
              </div>
              <div style={hexBottom}></div>
            </div>
            <div style={hex}>
              <div style={hexTop}></div>
              <div className="w-[45px] h-[78px] flex flex-col justify-center items-center bg-zinc-200">
                <h2 className="text-2xl font-bold">{letters[5].toUpperCase()}</h2>
              </div>
              <div style={hexBottom}></div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-20">
          <NewGameModal onClose={newGame} />
          <HintsModal possibleWords={possibleWords} pangrams={pangrams} />
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
