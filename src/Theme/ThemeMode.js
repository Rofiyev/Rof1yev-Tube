import { createTheme } from "@mui/material";

export const darkTheme = (mode) => (
  createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? {
        primary: {
          main: '#fff'
        },
        text: {
          secondary: '#00000099'
        }
      } : {
        primary: {
          main: "#ddd",
        },
        text: {
          secondary: "#ccc"
        }
      })
    }
  })
)