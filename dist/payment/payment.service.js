"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("../orders/orders.service");
const order_model_1 = require("../models/order.model");
const stripe_1 = __importDefault(require("stripe"));
let PaymentService = class PaymentService {
    constructor(ordersService) {
        this.ordersService = ordersService;
        this.stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY || 'sk_test_...', {
            apiVersion: '2022-11-15',
        });
    }
    async createPaymentIntent(orderId) {
        const order = await this.ordersService.findOne(orderId);
        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: Math.round(order.total * 100),
            currency: 'eur',
            metadata: {
                orderId: orderId.toString(),
            },
        });
        return {
            clientSecret: paymentIntent.client_secret,
        };
    }
    async handleWebhook(signature, body) {
        const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
        let event;
        try {
            event = this.stripe.webhooks.constructEvent(body, signature, endpointSecret);
        }
        catch (err) {
            throw new Error(`Webhook signature verification failed: ${err.message}`);
        }
        switch (event.type) {
            case 'payment_intent.succeeded':
                const paymentIntent = event.data.object;
                const orderId = parseInt(paymentIntent.metadata.orderId);
                await this.ordersService.updateStatus(orderId, order_model_1.OrderStatus.PROCESSING);
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => orders_service_1.OrdersService))),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map