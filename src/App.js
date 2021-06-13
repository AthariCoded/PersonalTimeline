import Home from "./Home";
import EventList from "./components/EventList";
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#FFFFFF",
    subColor: "#9B6A6C",
    subBackgroundColor: "white",
    backgroundColor: "#E2B4BD",
    mainBorderColor: "#424B54",
    subBorderColor: "#93A8AC",
  },
  dark: {
    mainColor: "#E2B4BD",
    subColor: "#9B6A6C",
    subBackgroundColor: "white",
    backgroundColor: "#FFFFFF",
    mainBorderColor: "#424B54",
    subBorderColor: "#93A8AC",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState["light"];

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <ThemeButton onClick={toggleTheme}>Dark mode</ThemeButton>
        <Home />
        <EventList />
      </ThemeProvider>
    </div>
  );
}
export default App;
