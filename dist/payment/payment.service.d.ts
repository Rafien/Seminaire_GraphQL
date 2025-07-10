import { OrdersService } from '../orders/orders.service';
export declare class PaymentService {
    private ordersService;
    private stripe;
    constructor(ordersService: OrdersService);
    createPaymentIntent(orderId: number): Promise<{
        clientSecret: string;
    }>;
    handleWebhook(signature: string, body: any): Promise<void>;
}
