import { Cart } from '../models/cart.model';
import { CartService } from './cart.service';
interface AuthContext {
    req: {
        user: {
            id: number;
            email: string;
        };
    };
}
export declare class CartResolver {
    private cartService;
    constructor(cartService: CartService);
    cart(context: AuthContext): Promise<Cart>;
    addToCart(productId: number, quantity: number, context: AuthContext): Promise<Cart>;
    removeFromCart(productId: number, context: AuthContext): Promise<Cart>;
    clearCart(context: AuthContext): Promise<Cart>;
}
export {};
