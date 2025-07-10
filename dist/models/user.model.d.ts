import { Model } from 'sequelize-typescript';
import { Order } from './order.model';
import { Cart } from './cart.model';
export declare class User extends Model<User> {
    id: number;
    name: string;
    email: string;
    password: string;
    orders: Order[];
    cart?: Cart;
}
