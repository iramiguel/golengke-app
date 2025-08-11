import { useState, useEffect } from "react";
import type { Products } from "../types";
import { products } from "../data/productsDB";
import "./ProductSort.css";

type Props = {
  className?: string;
  onSelect?: (category: string) => void;
};

export default function ProductSort({ className = "", onSelect }: Props) {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    setAllProducts(products);
    setProducts(products);
  }, []);

  const sortProducts = (category: Products["category"] | "all") => {
    if (category === "all") return setProducts(allProducts);
    setProducts(allProducts.filter((p) => p.category === category));
  };

  return (
    <div className={className}>
      <button className="scroll-item" onClick={() => onSelect?.("all")}>All</button>
      <button className="scroll-item" onClick={() => onSelect?.("meat")}>Meat</button>
      <button className="scroll-item" onClick={() => onSelect?.("seafood")}>Seafood</button>
      <button className="scroll-item" onClick={() => onSelect?.("produce")}>Fruits & Vegetables</button>
      <button className="scroll-item" onClick={() => onSelect?.("other")}>Others</button>
    </div>

    
  );
}
