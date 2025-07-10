import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { ObjectType, Field, ID, Float, registerEnumType } from '@nestjs/graphql';
import { User } from './user.model';
import { Product } from './product.model';
import { OrderProduct } from './order-product.model';

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

registerEnumType(OrderStatus, {
  name: 'OrderStatus',
});

@ObjectType()
@Table({ tableName: 'orders' })
export class Order extends Model<Order> {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Field(() => Float)
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  total: number;

  @Field(() => OrderStatus)
  @Column({
    type: DataType.ENUM(...Object.values(OrderStatus)),
    defaultValue: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @Field()
  @Column({
    type: DataType.TEXT,
  })
  shippingAddress: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @Field(() => User)
  @BelongsTo(() => User)
  user: User;

  @Field(() => [Product])
  @BelongsToMany(() => Product, () => OrderProduct)
  products: Product[];
}