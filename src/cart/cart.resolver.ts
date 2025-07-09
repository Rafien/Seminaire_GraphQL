import { Resolver, Query, Mutation, Args, Context, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Cart } from '../models/cart.model';
import { CartService } from './cart.service';

@Resolver(() => Cart)
@UseGuards(AuthGuard('jwt'))
export class CartResolver {
  constructor(private cartService: CartService) {}

  @Query(() => Cart)
  async cart(@Context() context) {
    const userId = context.req.user.id;
    return this.cartService.findOrCreateCart(userId);
  }

  @Mutation(() => Cart)
  async addToCart(
    @Args('productId', { type: () => ID }) productId: number,
    @Args('quantity') quantity: number,
    @Context() context,
  ) {
    const userId = context.req.user.id;
    return this.cartService.addToCart(userId, productId, quantity);
  }

  @Mutation(() => Cart)
  async removeFromCart(
    @Args('productId', { type: () => ID }) productId: number,
    @Context() context,
  ) {
    const userId = context.req.user.id;
    return this.cartService.removeFromCart(userId, productId);
  }

  @Mutation(() => Cart)
  async clearCart(@Context() context) {
    const userId = context.req.user.id;
    return this.cartService.clearCart(userId);
  }
}