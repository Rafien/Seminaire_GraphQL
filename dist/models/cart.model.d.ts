import { Model } from 'sequelize-typescript';
import { User } from './user.model';
import { CartItem } from './cart-item.model';
export declare class Cart extends Model<Cart> {
    id: number;
    userId: number;
    user: User;
    items: CartItem[];
    get total(): number;
}
