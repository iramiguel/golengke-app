import { products } from "../data/dummyProducts";
import ProductCard from "../components/GoLengke/ProductCard";


export default function ProductsList() {
  return (
    <div className="product-grid">
      {products.map(item => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}



