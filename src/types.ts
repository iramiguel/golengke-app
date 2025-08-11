export interface Products {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: "meat" | "seafood" | "produce" | "other";
}
