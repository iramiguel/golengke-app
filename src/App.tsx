/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home Page/Home";
import ProductsPage from "./pages/Products Page/ProductsPage";

const App: React.FC = () => {
  const [, setQuery] = useState("");

  const handleSearch = (searchText: string) => {
    setQuery(searchText);
    console.log("Searching for:", searchText);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;

