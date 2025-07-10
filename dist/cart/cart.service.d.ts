import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
export declare class CartService {
    private cartModel;
    private cartItemModel;
    constructor(cartModel: typeof Cart, cartItemModel: typeof CartItem);
    findOrCreateCart(userId: number): Promise<Cart>;
    addToCart(userId: number, productId: number, quantity: number): Promise<Cart>;
    removeFromCart(userId: number, productId: number): Promise<Cart>;
    clearCart(userId: number): Promise<Cart>;
}
