import { Product } from '../models/product.model';
import { ProductsService } from './products.service';
declare class CreateProductInput {
    name: string;
    price: number;
    description?: string;
    stock: number;
    image?: string;
}
export declare class ProductsResolver {
    private productsService;
    constructor(productsService: ProductsService);
    products(): Promise<Product[]>;
    product(id: number): Promise<Product>;
    createProduct(input: CreateProductInput): Promise<Product>;
    updateProduct(id: number, input: CreateProductInput): Promise<Product>;
    deleteProduct(id: number): Promise<boolean>;
}
export {};
