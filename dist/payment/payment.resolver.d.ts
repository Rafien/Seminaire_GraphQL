import { PaymentService } from './payment.service';
declare class PaymentIntent {
    clientSecret: string;
}
export declare class PaymentResolver {
    private paymentService;
    constructor(paymentService: PaymentService);
    createPaymentIntent(orderId: number): Promise<PaymentIntent>;
}
export {};
