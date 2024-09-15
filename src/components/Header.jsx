import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material"


const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      mode: 'dark',
    },
  });
  

return (
  <div className="header flex flex-col items-center justify-evenly h-[200px] w-full">
    <span className="title text-4xl font-montserrat font-extralight uppercase">Word Hunt</span>
    <div className="inputs ">
      <ThemeProvider theme={darkTheme}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          // defaultValue="EUR"
          helperText="Please select your currency"
        >
            <MenuItem>
              english
            </MenuItem>
        </TextField>
      </ThemeProvider>
    </div>
  </div>
)
}

export {Header}