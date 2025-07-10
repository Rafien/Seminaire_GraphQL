import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor(private ordersService: OrdersService) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_...', {
      apiVersion: '2023-10-16',
    });
  }

  async createPaymentIntent(orderId: number): Promise<{ clientSecret: string }> {
    const order = await this.ordersService.findOne(orderId);
    
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: Math.round(order.total * 100), // Stripe uses cents
      currency: 'eur',
      metadata: {
        orderId: orderId.toString(),
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  }

  async handleWebhook(signature: string, body: any) {
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    
    let event;
    try {
      event = this.stripe.webhooks.constructEvent(body, signature, endpointSecret);
    } catch (err) {
      throw new Error(`Webhook signature verification failed: ${err.message}`);
    }

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        const orderId = parseInt(paymentIntent.metadata.orderId);
        await this.ordersService.updateStatus(orderId, 'PROCESSING' as any);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }
}
