import { Model } from 'sequelize-typescript';
import { Cart } from './cart.model';
import { Product } from './product.model';
export declare class CartItem extends Model {
    id: number;
    quantity: number;
    cartId: number;
    productId: number;
    cart: Cart;
    product: Product;
}
//# sourceMappingURL=cart-item.model.d.ts.map