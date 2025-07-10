import { Model } from 'sequelize-typescript';
export declare class OrderProduct extends Model<OrderProduct> {
    orderId: number;
    productId: number;
    quantity: number;
    price: number;
}
