import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

const App: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (searchText: string) => {
    setQuery(searchText);
    console.log("Searching for:", searchText);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Home />
    </>
  );
};

export default App;
