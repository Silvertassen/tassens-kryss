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

type HexContainerProps = {
    letters: string[];
    requiredLetter: string;
}

export function HexContainer(props: HexContainerProps) {
    const { letters, requiredLetter } = props;
    
    return (
        <div className="flex justify-center items-center">
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
    )
}