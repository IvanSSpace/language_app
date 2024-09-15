import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";
import { categories } from "../data/category";

const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
  };

  return (
    <div className="header flex flex-col items-center justify-evenly h-[200px] w-full">
      <span className="title text-4xl font-montserrat font-extralight uppercase">{word ? word : "Word Hunt"}</span>
      <div className="inputs flex space-x-4 sm:w-[70%] bg-red-500">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search w-[50%]"
            label="Search a Word"
            id="standard-basic"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select w-[50%]"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
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
