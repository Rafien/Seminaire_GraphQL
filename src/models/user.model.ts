import { Table, Column, Model, DataType, HasMany, HasOne } from 'sequelize-typescript';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Order } from './order.model';
import { Cart } from './cart.model';

@ObjectType()
@Table({ tableName: 'users' })
export class User extends Model<User> {
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

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Field(() => [Order])
  @HasMany(() => Order)
  orders: Order[];

  @Field(() => Cart, { nullable: true })
  @HasOne(() => Cart)
  cart?: Cart;
}