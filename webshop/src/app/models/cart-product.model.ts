// {product: {id: 1, name: "", price: 23}, quantity: 12}

import { Product } from "./product.model";

export class CartProduct {
    constructor(
        public product: Product,
        public quantity: number
    ) {}
}