const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings flex flex-col overflow-y-scroll bg-green-500">
      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) => 
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
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
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export { Definitions };
