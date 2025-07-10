import { Resolver, Mutation, Args, ID, ObjectType, Field } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PaymentService } from './payment.service';

@ObjectType()
class PaymentIntent {
  @Field()
  clientSecret: string;
}

@Resolver(() => PaymentIntent)
@UseGuards(AuthGuard('jwt'))
export class PaymentResolver {
  constructor(private paymentService: PaymentService) {}

  @Mutation(() => PaymentIntent)
  async createPaymentIntent(
    @Args('orderId', { type: () => ID }) orderId: number,
  ): Promise<PaymentIntent> {
    return this.paymentService.createPaymentIntent(orderId);
  }
}