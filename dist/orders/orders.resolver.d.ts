import { Order, OrderStatus } from '../models/order.model';
import { OrdersService } from './orders.service';
interface AuthContext {
    req: {
        user: {
            id: number;
            email: string;
        };
    };
}
export declare class OrdersResolver {
    private ordersService;
    constructor(ordersService: OrdersService);
    orders(context: AuthContext): Promise<Order[]>;
    order(id: number): Promise<Order>;
    createOrder(shippingAddress: string, context: AuthContext): Promise<Order>;
    updateOrderStatus(id: number, status: OrderStatus): Promise<Order>;
}
export {};
