import { Product } from "./product";

export interface CartItem extends Product{
    id: number;
    quantity: number;
    description: string;
}
