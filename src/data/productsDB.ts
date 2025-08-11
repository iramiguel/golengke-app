import type { Products } from "../types";

export const products: Products[] = [


  // Meat:
{
    id: 1,
    name: "Liempo",
    price: 280,
    unit: "per kg",
    image: "https://img.freepik.com/premium-photo/meat-pork-slices-isolated-white-background_120872-23503.jpg",
    category: "meat"
  },

  // Seafood:
    {
    id: 2,
    name: "Fresh Tilapia",
    price: 150,
    unit: "per kg",
    image: "https://www.alimentarium.org/sites/default/files/media/image/2016-06/WEB---%20tilapia%20---_0.png",
    category: "seafood"
  },

  // Produce:
  {
    id: 3,
    name: "Organic Tomatoes",
    price: 80,
    unit: "per kg",
    image: "https://static.vecteezy.com/system/resources/previews/026/739/399/non_2x/of-tomatoes-and-slice-of-tomato-isolated-on-white-background-photo.jpg",
    category: "produce"
  },

  // Other:
  {
    id: 4,
    name: "Dozen Eggs",
    price: 110,
    unit: "per tray",
    image: "https://m.media-amazon.com/images/I/81DaMcHf81L._UF1000,1000_QL80_.jpg",
    category: "other"
  },
];
