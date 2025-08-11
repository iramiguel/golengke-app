// import "./ProductsHero.css";
// import ProductSort from "../../components/ProductSort";
// import { filterProducts } from "../../utils/filterProducts";

// const ProductsHero = () => {
//   const [allProducts, setAllProducts] = useState<Products[]>([]);
//   const [products, setProducts] = useState<Products[]>([]);

//   useEffect(() => {
//     setAllProducts(productsDB);
//     setProducts(productsDB); 
//   }, []);
  
//   return (
//     <div className="hero-wrapper-products">
//       <div className="hero-text">
//         <h2>Discover Variety of Goods</h2>
//         <p>Browse through all our products</p>
//       </div>
//       <div className="scroll-container">
//         <button className="scroll-item" onClick={() => filterProducts("all")}>
//           All
//         </button>
//         <button className="scroll-item" onClick={() => filterProducts("meat")}>
//           Meat
//         </button>
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
//     </div>
//   );
// };

// export default ProductsHero;


import "./ProductsHero.css";

export default function ProductsHero() {
  return (
    <div className="hero-wrapper-products">
      <div className="hero-text">
        <h2>Discover Variety of Goods</h2>
        <p>Browse through all our products</p>
      </div>

      {/* <div className="scroll-container">
        <button className="scroll-item" onClick={() => onSelect("all")}>All</button>
        <button className="scroll-item" onClick={() => onSelect("meat")}>Meat</button>
        <button className="scroll-item" onClick={() => onSelect("seafood")}>Seafood</button>
        <button className="scroll-item" onClick={() => onSelect("produce")}>Fruits & Vegetables</button>
        <button className="scroll-item" onClick={() => onSelect("other")}>Others</button>
      </div> */}
    </div>
  );
}
