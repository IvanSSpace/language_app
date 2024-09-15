import { ThemeProvider, createTheme } from "@mui/material/styles";

const Definitions = ({ word, category, meanings, lightMode }) => {
  const theme = createTheme({
    palette: {
      mode: lightMode ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {meanings[0] && word && category === "en" && (
        <audio
          className="py-1 pb-5 w-full"
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: lightMode ? "#fff" : "#282c34", borderRadius: 10 }}
          controls
        >
          Your browser does not support the audio element
        </audio>
      )}

      <div className="meanings flex flex-col overflow-y-scroll max-h-[60%] min-h-0 border-solid px-1 overflow-x-hidden border-2 border-neutral-700">
        {word === "" ? (
          <span className="subTitle">Start by typing the word in the search</span>
        ) : (
          meanings.map((mean) => {
            return mean.meanings.map((item) => {
              return item.definitions.map((def) => {
                return (
                  <div
                    className="singleMean py-1 rounded-md my-1 px-1"
                    key={def.definition}
                    style={{
                      backgroundColor: lightMode ? "white" : "#282c34",
                      color: lightMode ? "black" : "white",
                    }}
                  >
                    <b>{def.definition}</b>
                    <hr style={{ backgroundColor: lightMode ? "black" : "white", width: "100%" }} />
                    {def.example && (
                      <span>
                        <b>Example: </b>
                        {def.example}
                      </span>
                    )}
                    {def.synonyms.length !== 0 && (
                      <span>
                        <b>Synonyms: </b>
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
    </ThemeProvider>
  );
};

export { Definitions };
