import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  ChannelPage,
  Header,
  Main,
  SearchResultPage,
  VideoPage,
} from "./Components";
import ThemeContextMode from "./Context/ThemeContext";
import { darkTheme } from "./Theme/ThemeMode";

export default function App() {
  const [mode, setMode] = useState("light");
  const [category, setCategory] = useState("All");
  const categoryFunc = (selected) => setCategory(selected);

  return (
    <ThemeContextMode.Provider
      value={{
        mode,
        toggleMode: () => setMode(mode === "light" ? "dark" : "light"),
      }}
    >
      <ThemeProvider theme={darkTheme(mode)}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header category={category} categoryFunc={categoryFunc}>
                  <Main category={category} />
                </Header>
              </>
            }
          />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/channel/:id" element={<ChannelPage />} />
          <Route path="/search/:id" element={<SearchResultPage />} />
        </Routes>
      </ThemeProvider>
    </ThemeContextMode.Provider>
  );
}
