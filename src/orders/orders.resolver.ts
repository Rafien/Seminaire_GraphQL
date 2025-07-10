import { Resolver, Query, Mutation, Args, Context, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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

@Resolver(() => Order)
@UseGuards(AuthGuard('jwt'))
export class OrdersResolver {
  constructor(private ordersService: OrdersService) {}

  @Query(() => [Order])
  async orders(@Context() context: AuthContext) {
    const userId = context.req.user.id;
    return this.ordersService.findByUser(userId);
  }

  @Query(() => Order)
  async order(@Args('id', { type: () => ID }) id: number) {
    return this.ordersService.findOne(id);
  }

  @Mutation(() => Order)
  async createOrder(
    @Args('shippingAddress') shippingAddress: string,
    @Context() context: AuthContext,
  ) {
    const userId = context.req.user.id;
    return this.ordersService.createOrder(userId, shippingAddress);
  }

  @Mutation(() => Order)
  async updateOrderStatus(
    @Args('id', { type: () => ID }) id: number,
    @Args('status', { type: () => OrderStatus }) status: OrderStatus,
  ) {
    return this.ordersService.updateStatus(id, status);
  }
}