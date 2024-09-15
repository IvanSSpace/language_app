import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";
import { categories } from "../data/category";
import { useState, useEffect } from "react";

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
  const [funFact, setFunFact] = useState("");

  const funFacts = [
    "Самое длинное слово в русском языке - 'превысокомногорассмотрительствующий' (35 букв)",
    "В английском языке слово 'set' имеет 464 определения",
    "Эскимосы используют 50 разных слов для описания снега",
    "Слово 'горизонт' никогда не может быть произнесено с буквой 'о' в конце",
    "В китайском языке слово 'кризис' состоит из двух иероглифов: 'опасность' и 'возможность'",
    "Самое длинное слово в английском языке - 'pneumonoultramicroscopicsilicovolcanoconiosis' (45 букв)",
    "Английский язык не имеет официального регулирующего органа, в отличие от французского или испанского",
    "Слово 'alphabet' происходит от первых двух букв греческого алфавита: 'alpha' и 'beta'",
    "Слово 'I' является одним из самых коротких и наиболее часто используемых слов в английском языке",
    "Английский язык является официальным языком в 67 странах мира",
    "В английском языке существуют более 170 тысяч слов, зафиксированных в Оксфордском словаре",
    "Самое часто употребляемое слово в английском языке — это 'the'",
    "Слово 'dreamt' — единственное слово в английском языке, которое заканчивается на 'mt'",
    "Английский алфавит не всегда содержал 26 букв; раньше в нем было всего 24",
    "Английские слова часто заимствуются из других языков, например, 'ballet' из французского",
    "Слово 'goodbye' происходит от фразы 'God be with ye'",
    "Слово 'queue' можно прочитать без последних четырех букв и оно все равно будет означать 'очередь'",
    "Самая распространенная буква в английском языке — это 'e'",
    "В английском языке есть 9 различных способов произнести букву 'ough'",
    "Слово 'uncopyrightable' состоит только из уникальных букв",
    "Английский язык включает слова, которые могут изменять своё значение в зависимости от ударения, например, 'record'",
    "Каждую секунду в мире появляется новое английское слово, особенно благодаря технологиям",
    "Английские слова 'silent' и 'listen' содержат одни и те же буквы в разном порядке",
    "Слово 'pronunciation' — одно из самых часто неправильно произносимых слов",
  ];

  useEffect(() => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFunFact(randomFact);
  }, []);

  const theme = createTheme({
    palette: {
      mode: lightMode ? "light" : "dark",
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
    },
  });

  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
  };

  return (
    <div className="header flex flex-col items-center justify-evenly h-[200px] w-full">
      <span className="title text-4xl font-montserrat font-extralight uppercase">
        {word ? word : "Word Hunt"}
      </span>
      {!word && (
        <span className="fun-fact text-sm italic text-center mx-4">Забавный факт: {funFact}</span>
      )}
      <div className="inputs flex space-x-4 sm:w-[70%]">
        <ThemeProvider theme={theme}>
          <TextField
            className="search w-[50%]"
            label="Search a Word"
            id="standard-basic"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            sx={{
              input: { color: lightMode ? "#000" : "#fff" },
              label: { color: lightMode ? "#000" : "#fff" },
            }}
          />
          <TextField
            className="select w-[50%]"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
            sx={{
              input: { color: lightMode ? "#000" : "#fff" },
              label: { color: lightMode ? "#000" : "#fff" },
              svg: { color: lightMode ? "#000" : "#fff" },
            }}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export { Header };
