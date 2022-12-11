import "./App.css";
import Search from "./Component/Search/Search";
import CardGrid from "./Component/CardGrid/CardGrid";
import { useState } from "react";
import Footer from "./Component/Footer/Footer";

function App() {
  const [search, setSearch] = useState();

  const searchKeys = (e) => {
    setSearch(e.target.value);
  }
  console.log(search);
  return (
    <div className="app">
      <Search searchHandler={searchKeys} />
      <CardGrid searchState={search} />
      <Footer />
    </div>
  );
}

export default App;
