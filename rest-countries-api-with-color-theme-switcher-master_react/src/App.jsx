import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import CountryList from "./components/CountryList";
import Search from "./components/Search";
import Select from "./components/Select";
import Detail from "./components/Detail";
import Route from "./components/Route";

const options = [
  { label: "Filter by All", value: "" },
  { label: "Africa", value: "Africa" },
  { label: "America", value: "America" },
  { label: "Asia", value: "Asia" },
  { label: "Europe", value: "Europe" },
  { label: "Oceania", value: "Oceania" },
];

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("");
  const [darkMode, setDarkMode] = useState();
  const [goTo, setGoTo] = useState({});
  const [borders, setBorders] = useState([]);
  const [bordersR, setBordersR] = useState([]);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const search = async (service, query = "") => {
      const res = await axios.get(
        `https://restcountries.com/v3.1/${service}/${query}`
      );
      setResults(res.data);
    };

    const searchBorders = async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${borders?.join()}`
      );
      setBordersR(data);
    };
    searchBorders();
    //THEMING
    //TODO: Local Storage
    const rootEl = document.documentElement;
    const setMode = () => {
      rootEl.dataset.theme = `${theme}`;
      localStorage.setItem("theme", `${theme}`);
    };
    if (darkMode) {
      setTheme("dark");
      setMode(theme);
    } else {
      setTheme("light");
      setMode(theme);
    }

    /////////////////////////////////////////////////////////

    if (!term && !filter) {
      search("all");
    } else if (term && !filter) {
      const timeId = setTimeout(() => {
        search("name", term);
      }, 600);

      return () => {
        clearTimeout(timeId);
      };
    } else if (filter && !term) {
      search("region", filter);
    }

    return () => {
      setBordersR([]);
    };
  }, [term, filter, darkMode, goTo, borders, theme]);

  return (
    <>
      <Route path="/">
        <Header darkMode={darkMode} onDarkSwitch={setDarkMode} />
        <main>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="container form-w">
              <Search
                term={term}
                onTermChange={setTerm}
                onFilterChange={setFilter}
              />
              <Select
                options={options}
                filter={filter}
                onFilterChange={setFilter}
                onTermChange={setTerm}
              />
            </div>
          </form>
          <CountryList
            countries={results}
            goTo={goTo}
            onGoTo={setGoTo}
            setBorders={setBorders}
          />
        </main>
      </Route>
      <Route path={`/${goTo.name?.common}`}>
        <Header darkMode={darkMode} onDarkSwitch={setDarkMode} />
        <Detail country={goTo} onGoTo={setGoTo} borders={bordersR} />
      </Route>
    </>
  );
}

export default App;
