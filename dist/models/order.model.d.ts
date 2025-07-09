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
export declare class Order extends Model {
    id: number;
    total: number;
    status: OrderStatus;
    shippingAddress: string;
    userId: number;
    user: User;
    products: Product[];
}
//# sourceMappingURL=order.model.d.ts.map