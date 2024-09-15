const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings flex flex-col overflow-y-scroll max-h-[70%] min-h-0 border-solid px-1 overflow-x-hidden border-2 border-neutral-700">
      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) => {
          return mean.meanings.map((item) => {
            return item.definitions.map((def) => {
              console.log("def", def);
              return (
                <div
                  className="singleMean py-1"
                  key={def.definition}
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <b>{def.definition}</b>
                  <hr style={{ backgroundColor: "black", width: "100%" }} />
                  {def.example && (
                    <span>
                      <b>Example : </b>
                      {def.example}
                    </span>
                  )}
                  {def.synonyms.length !== 0 && (
                    <span>
                      <b>Synonyms : </b>
                      {def.synonyms.map((s) => `${s}, `)}
                    </span>
                  )}
                </div>
              );
            });
          });
        })
      )}
    </div>
  );
};

export { Definitions };
