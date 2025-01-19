import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TopNav from "./components/templates/TopNav";
import { ThemeProvider } from "./contexts/ThemeSwitch";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [navExit, setNavExit] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className="min-h-screen w-[100%] bg-white dark:bg-neutral-800 overflow-x-hidden overflow-y-auto relative scroll-smooth">
        <TopNav navExit={navExit} setNavExit={setNavExit} />
        <div className="flex pt-16 w-full h-full overflow-hidden">
          <Routes>
            <Route path="/movie-prix/" element={<Home navExit={navExit} setNavExit={setNavExit} />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
