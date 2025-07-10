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
exports.ProductsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const product_model_1 = require("../models/product.model");
const products_service_1 = require("./products.service");
let CreateProductInput = class CreateProductInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateProductInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], CreateProductInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateProductInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateProductInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateProductInput.prototype, "image", void 0);
CreateProductInput = __decorate([
    (0, graphql_1.InputType)()
], CreateProductInput);
let ProductsResolver = class ProductsResolver {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async products() {
        return this.productsService.findAll();
    }
    async product(id) {
        return this.productsService.findOne(id);
    }
    async createProduct(input) {
        return this.productsService.create(input);
    }
    async updateProduct(id, input) {
        return this.productsService.update(id, input);
    }
    async deleteProduct(id) {
        await this.productsService.remove(id);
        return true;
    }
};
exports.ProductsResolver = ProductsResolver;
__decorate([
    (0, graphql_1.Query)(() => [product_model_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "products", null);
__decorate([
    (0, graphql_1.Query)(() => product_model_1.Product),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "product", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_model_1.Product),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProductInput]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_model_1.Product),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CreateProductInput]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "deleteProduct", null);
exports.ProductsResolver = ProductsResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_model_1.Product),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsResolver);
//# sourceMappingURL=products.resolver.js.map