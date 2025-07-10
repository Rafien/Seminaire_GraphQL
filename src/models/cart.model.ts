import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { User } from './user.model';
import { CartItem } from './cart-item.model';

@ObjectType()
@Table({ tableName: 'carts' })
export class Cart extends Model<Cart> {
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

  @Field(() => Float)
  get total(): number {
    if (!this.items || this.items.length === 0) return 0;
    return this.items.reduce((sum, item) => {
      const price = item.product?.price || 0;
      return sum + (price * item.quantity);
    }, 0);
  }
}
