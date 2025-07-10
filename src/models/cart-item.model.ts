import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Cart } from './cart.model';
import { Product } from './product.model';

@ObjectType()
@Table({ tableName: 'cart_items' })
export class CartItem extends Model {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Field(() => Int)
  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
  })
  quantity: number;

  @ForeignKey(() => Cart)
  @Column
  cartId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @Field(() => Cart)
  @BelongsTo(() => Cart)
  cart: Cart;

  @Field(() => Product)
  @BelongsTo(() => Product)
  product: Product;
}