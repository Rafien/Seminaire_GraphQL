import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart)
    private cartModel: typeof Cart,
    @InjectModel(CartItem)
    private cartItemModel: typeof CartItem,
  ) {}

  async findOrCreateCart(userId: number): Promise<Cart> {
    let cart = await this.cartModel.findOne({
      where: { userId },
      include: [{ model: CartItem, include: [Product] }],
    });

    if (!cart) {
      cart = await this.cartModel.create({ userId });
      // Recharger avec les associations
      cart = await this.cartModel.findByPk(cart.id, {
        include: [{ model: CartItem, include: [Product] }],
      });
    }

    return cart!;
  }

  async addToCart(userId: number, productId: number, quantity: number): Promise<Cart> {
    const cart = await this.findOrCreateCart(userId);
    
    const existingItem = await this.cartItemModel.findOne({
      where: { cartId: cart.id, productId },
    });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
    } else {
      await this.cartItemModel.create({
        cartId: cart.id,
        productId,
        quantity,
      });
    }

    return this.findOrCreateCart(userId);
  }

  async removeFromCart(userId: number, productId: number): Promise<Cart> {
    const cart = await this.findOrCreateCart(userId);
    
    await this.cartItemModel.destroy({
      where: { cartId: cart.id, productId },
    });

    return this.findOrCreateCart(userId);
  }

  async clearCart(userId: number): Promise<Cart> {
    const cart = await this.findOrCreateCart(userId);
    
    await this.cartItemModel.destroy({
      where: { cartId: cart.id },
    });

    return this.findOrCreateCart(userId);
  }
}