import { Cart } from '../models/cart.model';
import { CartService } from './cart.service';
export declare class CartResolver {
    private cartService;
    constructor(cartService: CartService);
    cart(context: any): Promise<Cart>;
    addToCart(productId: number, quantity: number, context: any): Promise<Cart>;
    removeFromCart(productId: number, context: any): Promise<Cart>;
    clearCart(context: any): Promise<Cart>;
}
//# sourceMappingURL=cart.resolver.d.ts.map