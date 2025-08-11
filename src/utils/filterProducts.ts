import type { Products } from "../types";

export type Category = Products["category"] | "all";

export function filterProducts(products: Products[], category: Category) {

    return category === "all"
        ? products
        : products.filter((p) => p.category === category);
}
