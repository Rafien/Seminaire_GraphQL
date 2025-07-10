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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const graphql_1 = require("@nestjs/graphql");
const order_model_1 = require("./order.model");
const order_product_model_1 = require("./order-product.model");
let Product = class Product extends sequelize_typescript_1.Model {
};
exports.Product = Product;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(() => [order_model_1.Order]),
    (0, sequelize_typescript_1.BelongsToMany)(() => order_model_1.Order, () => order_product_model_1.OrderProduct),
    __metadata("design:type", Array)
], Product.prototype, "orders", void 0);
exports.Product = Product = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, sequelize_typescript_1.Table)({ tableName: 'products' })
], Product);
//# sourceMappingURL=product.model.js.map