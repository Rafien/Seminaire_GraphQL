import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async create(productData: Partial<Product>): Promise<Product> {
    return this.productModel.create(productData);
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async findOne(id: number): Promise<Product> {
    return this.productModel.findByPk(id);
  }

  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productModel.update(productData, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productModel.destroy({ where: { id } });
  }

  async updateStock(id: number, quantity: number): Promise<Product> {
    const product = await this.findOne(id);
    product.stock -= quantity;
    await product.save();
    return product;
  }
}