import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order, OrderStatus } from '../models/order.model';
import { OrderProduct } from '../models/order-product.model';
import { CartService } from '../cart/cart.service';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private orderModel: typeof Order,
    @InjectModel(OrderProduct)
    private orderProductModel: typeof OrderProduct,
    private cartService: CartService,
    private productsService: ProductsService,
  ) {}

  async createOrder(userId: number, shippingAddress: string): Promise<Order> {
    const cart = await this.cartService.findOrCreateCart(userId);
    
    let total = 0;
    const orderItems = [];

    for (const item of cart.items) {
      const product = await this.productsService.findOne(item.productId);
      const itemTotal = product.price * item.quantity;
      total += itemTotal;
      
      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      });

      // Update stock
      await this.productsService.updateStock(item.productId, item.quantity);
    }

    const order = await this.orderModel.create({
      userId,
      total,
      shippingAddress,
      status: OrderStatus.PENDING,
    });

    // Create order products
    for (const item of orderItems) {
      await this.orderProductModel.create({
        orderId: order.id,
        ...item,
      });
    }

    // Clear cart
    await this.cartService.clearCart(userId);

    return this.findOne(order.id);
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.findAll({
      include: ['user', 'products'],
    });
  }

  async findOne(id: number): Promise<Order> {
    return this.orderModel.findByPk(id, {
      include: ['user', 'products'],
    });
  }

  async findByUser(userId: number): Promise<Order[]> {
    return this.orderModel.findAll({
      where: { userId },
      include: ['products'],
    });
  }

  async updateStatus(id: number, status: OrderStatus): Promise<Order> {
    await this.orderModel.update({ status }, { where: { id } });
    return this.findOne(id);
  }
}