import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
import { ProductsModule } from '../products/products.module';
import { CartService } from './cart.service';
import { CartResolver } from './cart.resolver';

@Module({
  imports: [
    SequelizeModule.forFeature([Cart, CartItem]),
    ProductsModule,
  ],
  providers: [CartService, CartResolver],
  exports: [CartService],
})
export class CartModule {}