import "./ProductCard.css";

type ProductProps = {
  name: string;
  price: number;
  unit: string;
  image: string;
};

export default function ProductCard({ name, price, unit, image }: ProductProps) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₱{price} {unit}</p>
      <button>Add to Cart</button>
    </div>
  );
}
