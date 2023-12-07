import { useState } from "react";

type HintsModalProps = {
    possibleWords: string[];
    pangrams: string[];
  }
  
export function HintsModal(props: HintsModalProps) {
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