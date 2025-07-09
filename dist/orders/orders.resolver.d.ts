import { Order } from '../models/order.model';
import { OrdersService } from './orders.service';
export declare class OrdersResolver {
    private ordersService;
    constructor(ordersService: OrdersService);
    orders(context: any): Promise<Order[]>;
    order(id: number): Promise<Order>;
    createOrder(shippingAddress: string, context: any): Promise<Order>;
}
//# sourceMappingURL=orders.resolver.d.ts.map