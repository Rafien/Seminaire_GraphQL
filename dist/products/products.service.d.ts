import { Product } from '../models/product.model';
export declare class ProductsService {
    private productModel;
    constructor(productModel: typeof Product);
    create(productData: Partial<Product>): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, productData: Partial<Product>): Promise<Product>;
    remove(id: number): Promise<void>;
    updateStock(id: number, quantity: number): Promise<Product>;
}
