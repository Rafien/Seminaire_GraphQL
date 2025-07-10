import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service';
import { OrderStatus } from '../models/order.model';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor(
    @Inject(forwardRef(() => OrdersService))
    private ordersService: OrdersService,
  ) {
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
      clientSecret: paymentIntent.client_secret!,
    };
  }

  async handleWebhook(signature: string, body: any): Promise<void> {
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    
    let event;
    try {
      event = this.stripe.webhooks.constructEvent(body, signature, endpointSecret!);
    } catch (err: any) {
      throw new Error(`Webhook signature verification failed: ${err.message}`);
    }

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const orderId = parseInt(paymentIntent.metadata.orderId);
        await this.ordersService.updateStatus(orderId, OrderStatus.PROCESSING);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }
}