import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import { Order } from './order.model';
import { OrderProduct } from './order-product.model';

@ObjectType()
@Table({ tableName: 'products' })
export class Product extends Model {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Field(() => Float)
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @Field({ nullable: true })
  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Field(() => Int)
  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  stock: number;

  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
  })
  image: string;

  @Field(() => [Order])
  @BelongsToMany(() => Order, () => OrderProduct)
  orders: Order[];
}