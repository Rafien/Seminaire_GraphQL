import { Model } from 'sequelize-typescript';
import { User } from './user.model';
import { Product } from './product.model';
export declare enum OrderStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED"
}
export declare class Order extends Model<Order> {
    id: number;
    total: number;
    status: OrderStatus;
    shippingAddress: string;
    userId: number;
    user: User;
    products: Product[];
}
