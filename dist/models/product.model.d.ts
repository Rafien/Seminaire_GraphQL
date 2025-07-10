import { Model } from 'sequelize-typescript';
import { Order } from './order.model';
export declare class Product extends Model<Product> {
    id: number;
    name: string;
    price: number;
    description?: string;
    stock: number;
    image?: string;
    orders: Order[];
}
