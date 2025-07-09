import { Order, OrderStatus } from '../models/order.model';
import { OrderProduct } from '../models/order-product.model';
import { CartService } from '../cart/cart.service';
import { ProductsService } from '../products/products.service';
export declare class OrdersService {
    private orderModel;
    private orderProductModel;
    private cartService;
    private productsService;
    constructor(orderModel: typeof Order, orderProductModel: typeof OrderProduct, cartService: CartService, productsService: ProductsService);
    createOrder(userId: number, shippingAddress: string): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    findByUser(userId: number): Promise<Order[]>;
    updateStatus(id: number, status: OrderStatus): Promise<Order>;
}
//# sourceMappingURL=orders.service.d.ts.map