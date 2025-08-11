// // import React from "react";
// // import Footer from "./Foote
// import Hero from "./ProductsHero";

// // interface ProductsProps {
// //   query: string;
// // }

// export const ProductsPage = () => {
//   return (
    
//   <div>
//     <Hero />
    
//   </div>

// )

// };

// export default ProductsPage;


import { useEffect, useState } from "react";
import type { Products } from "../../types";
import { products } from "../../data/productsDB";
import { filterProducts } from "../../utils/filterProducts";
import ProductsHero from "./ProductsHero";
import ProductList from "../../components/ProductList";

export default function ProductsPage() {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [items, setItems] = useState<Products[]>([]);

  useEffect(() => {
    setAllProducts(products);
    setItems(products);
  }, []);

  // const handleSelect = (category: Products["category"] | "all") => {
  //   setItems(filterProducts(allProducts, category));
  // };

  return (
    <>
      <ProductsHero  />
      <ProductList items={items} />
    </>
  );
}
