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
exports.OrderProduct = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_model_1 = require("./order.model");
const product_model_1 = require("./product.model");
let OrderProduct = class OrderProduct extends sequelize_typescript_1.Model {
};
exports.OrderProduct = OrderProduct;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => order_model_1.Order),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], OrderProduct.prototype, "orderId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.Product),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], OrderProduct.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 1,
    }),
    __metadata("design:type", Number)
], OrderProduct.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
    }),
    __metadata("design:type", Number)
], OrderProduct.prototype, "price", void 0);
exports.OrderProduct = OrderProduct = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'order_products' })
], OrderProduct);
//# sourceMappingURL=order-product.model.js.map