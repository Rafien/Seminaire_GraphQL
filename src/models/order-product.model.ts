import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Order } from './order.model';
import { Product } from './product.model';

@Table({ tableName: 'order_products' })
export class OrderProduct extends Model {
  @ForeignKey(() => Order)
  @Column
  orderId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
  })
  quantity: number;

  @Column({
    type: DataType.FLOAT,
  })
  price: number;
}