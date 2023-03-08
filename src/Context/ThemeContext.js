import { createContext } from "react";

const ThemeContextMode = createContext({ mode: "light", toggleMode: () => { } });
export default ThemeContextMode;
