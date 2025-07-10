"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const product_model_1 = require("../models/product.model");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create(productData) {
        return this.productModel.create(productData);
    }
    async findAll() {
        return this.productModel.findAll();
    }
    async findOne(id) {
        const product = await this.productModel.findByPk(id);
        if (!product) {
            throw new common_1.NotFoundException(`Product with id ${id} not found`);
        }
        return product;
    }
    async update(id, productData) {
        const product = await this.findOne(id);
        await this.productModel.update(productData, { where: { id } });
        return this.findOne(id);
    }
    async remove(id) {
        const product = await this.findOne(id);
        await this.productModel.destroy({ where: { id } });
    }
    async updateStock(id, quantity) {
        const product = await this.findOne(id);
        if (product.stock < quantity) {
            throw new Error(`Insufficient stock for product ${product.name}`);
        }
        product.stock -= quantity;
        await product.save();
        return product;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(product_model_1.Product)),
    __metadata("design:paramtypes", [Object])
], ProductsService);
//# sourceMappingURL=products.service.js.map