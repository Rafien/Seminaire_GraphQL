import { Model } from 'sequelize-typescript';
import { Cart } from './cart.model';
import { Product } from './product.model';
export declare class CartItem extends Model<CartItem> {
    id: number;
    quantity: number;
    cartId: number;
    productId: number;
    cart: Cart;
    product: Product;
}
