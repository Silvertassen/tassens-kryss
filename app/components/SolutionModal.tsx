import { useState } from "react";

type SolutionModalProps = {
    possibleWords: string[];
    wordsFound: string[];
  }
  
export function SolutionModal(props: SolutionModalProps) {
    const { possibleWords, wordsFound } = props;
  
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
            Lösning
          </button>
        </div>
        {showModal ? (
            <div onClick={closeOnBackdropClick} className="bg-slate-500 bg-opacity-75 transition-opacity opacity-100 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative my-6 mx-auto">
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all dark:bg-slate-800 opacity-100 translate-y-0">
                  <button onClick={() => setShowModal(false)} aria-pressed="false" className="absolute right-4 top-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 cursor-pointer dark:stroke-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                  <div className="flex flex-col mt-4">
                    <div className="text-center">
                      <h3 className="text-lg leading-6 font-medium text-slate-900 dark:text-slate-100" id="headlessui-dialog-title-:r5:">
                        Möjliga ord
                      </h3>
                    </div>
                    <div className="grid grid-cols-8 gap-x-16 mt-2">
                      {
                        possibleWords.map((word, index) => (
                          <div key={index} className={`${wordsFound.includes(word) ? 'text-black' : 'text-red-700'} text-md`}>
                            {word}
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ) : null}
      </>
    )
  }