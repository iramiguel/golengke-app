import React from "react";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Headline from "./Headline";
import Main from "./MainContent";
import Footer from "./Footer";

interface ProductsProps {
  query: string;
}

const ProductsPage = () => {
  return (
    <div>
      <Hero />
      <Headline />
      <Main />
      <Reviews />
      <Footer />
    </div>
  );
};

export default ProductsPage;
