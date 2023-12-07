import { useState } from "react";

type NewGameModalProps = {
    onClose: (letters: string, requiredLetter: string) => void;
  }
  
export function NewGameModal(props: NewGameModalProps) {
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
            className="border border-yellow-400 py-3 px-2 rounded-full active:bg-gray-100 disabled:active:bg-white select-none"
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