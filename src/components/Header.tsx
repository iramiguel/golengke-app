/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { User, ShoppingCart, List } from "lucide-react";
import "./Header.css";
import { ArrowRight, SquareX } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [query] = useState("");
  const [, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigate = useNavigate();

  // const handleSearch = (searchText: string) => {
  //   setQuery(searchText);
  //   onSearch(searchText);
  //   console.log("Searching for:", searchText);
  // };

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <a href="" className="logo" onClick={() => navigate("/")}>GoLengke</a>
        </div>
        <div className="header-links">
          <a href="#products">All products</a>
          <a href="#meat">Meat</a>
          <a href="#seafood">Seafood</a>
          <a href="#fru-veg">Fruits & Vegetables</a>
          <a href="#others">Others</a>
        </div>
        <div className="header-buttons">
          <a href="">
            <User color="#ffffffff" strokeWidth={3} />
          </a>
          <a href="">
            <ShoppingCart color="#ffffffff" strokeWidth={3} />
          </a>
          <a href="#" className="list-toggle" onClick={toggleMobileMenu}>
            <List color="#ffffffff" strokeWidth={3} />
          </a>
        </div>
      </div>

      <>
        {showMobileMenu && (
          <div className="mobile-nav-overlay">
            <div className="mobile-nav-slide">
              <button
                className="close-btn"
                onClick={() => setShowMobileMenu(false)}
              >
                <SquareX />
              </button>
              <div className="top-nav">
                <h2>Menu</h2>
                <input
                  type="text"
                  className="mobile-search"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => onSearch(e.target.value)}
                />
                <ul className="list-menu">
                  <li>
                    <a href="#meat">Meat</a>
                  </li>
                  <li>
                    <a href="#seafood">Seafood</a>
                  </li>
                  <li>
                    <a href="#fru-veg">Fruits & Vegetables</a>
                  </li>
                  <li>
                    <a href="#others">Others</a>
                  </li>
                  <button
                    className="view-all-btn"
                    onClick={() => navigate("/products")}
                  >
                    View All <ArrowRight />
                  </button>
                </ul>
              </div>
              <ul className="list-about">
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#terms">Terms of Service</a>
                </li>
                <li>
                  <a href="#policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Header;
