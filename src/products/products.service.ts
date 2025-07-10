import { Injectable, NotFoundException } from '@nestjs/common';
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
    const product = await this.productModel.findByPk(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async update(id: number, productData: Partial<Product>): Promise<Product> {
    const product = await this.findOne(id);
    await this.productModel.update(productData, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await this.productModel.destroy({ where: { id } });
  }

  async updateStock(id: number, quantity: number): Promise<Product> {
    const product = await this.findOne(id);
    
    if (product.stock < quantity) {
      throw new Error(`Insufficient stock for product ${product.name}`);
    }
    
    product.stock -= quantity;
    await product.save();
    return product;
  }
}