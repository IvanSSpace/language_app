import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { Container, Switch } from "@mui/material";
import { Header } from "./components/Header";
import { Definitions } from "./components/Definitions";
import { useDebounce } from "./components/utils/hooks/useDebounce";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightMode, setLightMode] = useState(true);

  const debouncedWord = useDebounce(word, 500);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  // console.log(meanings);

  useEffect(() => {
    if (debouncedWord) {
      dictionaryApi();
    }
  }, [debouncedWord, category]);

  useEffect(() => {
    console.log({ category });
  }, [category]);

  const handleChange = (event) => {
    setLightMode(event.target.checked);
  };

  const theme = lightMode
    ? {
        backgroundColor: "#ffffff",
        color: "#000000",
      }
    : {
        backgroundColor: "#282c34",
        color: "white",
      };

  return (
    <div className="App" style={{ height: "100vh", ...theme }}>
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div>
          <Switch
            checked={lightMode}
            onChange={handleChange}
            color="default"
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
        />
        {meanings && (
          <Definitions 
            word={word} 
            category={category} 
            meanings={meanings} 
            lightMode={lightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
