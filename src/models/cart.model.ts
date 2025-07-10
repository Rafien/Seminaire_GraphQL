import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { User } from './user.model';
import { CartItem } from './cart-item.model';

@ObjectType()
@Table({ tableName: 'carts' })
export class Cart extends Model {
  @Field(() => ID)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @Field(() => User)
  @BelongsTo(() => User)
  user: User;

  @Field(() => [CartItem])
  @HasMany(() => CartItem)
  items: CartItem[];

  // Ajout d'un champ calculé pour le total
  @Field(() => Float)
  get total(): number {
    return this.items?.reduce((sum, item) => sum + (item.product?.price || 0) * item.quantity, 0) || 0;
  }
}