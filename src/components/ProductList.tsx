// import { useEffect, useState } from "react";
// import ProductCard from "../../components/GoLengke/ProductCard";
// import type { Products } from "../../types";
// import { filterProducts } from "../../utils/filterProducts";

// export default function ProductsList({ items }: { items: Products[] }) {
//   const [allProducts, setAllProducts] = useState<Products[]>([]);
//   const [products, setProducts] = useState<Products[]>([]);
//   const [items, setItems] = useState<Products[]>([]);

//   useEffect(() => {
//     setAllProducts(products);
//     setItems(products);
//   }, []);

//   const handleSelect = (category: Products["category"] | "all") => {
//     setItems(filterProducts(allProducts, category));
//   };

//   return (
//     <div className="product-grid">
//       <div className="scroll-container">
//         //{" "}
//         <button className="scroll-item" onClick={() => filterProducts("all")}>
//           // All //{" "}
//         </button>
//         //{" "}
//         <button className="scroll-item" onClick={() => filterProducts("meat")}>
//           // Meat //{" "}
//         </button>
//         //{" "}
//         <button
//           className="scroll-item"
//           onClick={() => filterProducts("seafood")}
//         >
//           Seafood
//         </button>
//         <button
//           className="scroll-item"
//           onClick={() => filterProducts("produce")}
//         >
//           Fruits & Vegetables
//         </button>
//         <button className="scroll-item" onClick={() => filterProducts("other")}>
//           Others
//         </button>
//       </div>

//       {items.map((p) => (
//         <ProductCard key={p.id} {...p} />
//       ))}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import type { Products } from "../types";
import { filterProducts } from "../utils/filterProducts";
import "./ProductList.css";

type Props = { items: Products[] };

const categories: (Products["category"] | "all")[] = [
  "all",
  "meat",
  "seafood",
  "produce",
  "other",
];

export default function ProductsList({ items }: Props) {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Products[]>([]);

  useEffect(() => {
    setAllProducts(items);
    setVisibleProducts(items);
  }, [items]);

  const handleSelect = (category: Products["category"] | "all") => {
    if (category === "all") {
      setVisibleProducts(allProducts);
    } else {
      setVisibleProducts(filterProducts(allProducts, category));
    }
  };

  return (
    <div className="product-container">
      <div className="scroll-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleSelect(cat)}
            className="scroll-item"
          >
            {cat === "all"
              ? "All"
              : cat === "produce"
              ? "Fruits & Vegetables"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="product-grid-container">
        {visibleProducts.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            unit={p.unit}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
}
