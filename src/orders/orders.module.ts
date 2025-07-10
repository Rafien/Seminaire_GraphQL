import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from '../models/order.model';
import { OrderProduct } from '../models/order-product.model';
import { CartModule } from '../cart/cart.module';
import { ProductsModule } from '../products/products.module';
import { PaymentModule } from '../payment/payment.module';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';

@Module({
  imports: [
    SequelizeModule.forFeature([Order, OrderProduct]),
    CartModule,
    ProductsModule,
    forwardRef(() => PaymentModule),
  ],
  providers: [OrdersService, OrdersResolver],
  exports: [OrdersService],
})
export class OrdersModule {}