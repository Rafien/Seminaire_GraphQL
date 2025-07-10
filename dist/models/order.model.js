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
exports.Order = exports.OrderStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
const product_model_1 = require("./product.model");
const order_product_model_1 = require("./order-product.model");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["PROCESSING"] = "PROCESSING";
    OrderStatus["SHIPPED"] = "SHIPPED";
    OrderStatus["DELIVERED"] = "DELIVERED";
    OrderStatus["CANCELLED"] = "CANCELLED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
(0, graphql_1.registerEnumType)(OrderStatus, {
    name: 'OrderStatus',
});
let Order = class Order extends sequelize_typescript_1.Model {
};
exports.Order = Order;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    (0, graphql_1.Field)(() => OrderStatus),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(OrderStatus)),
        defaultValue: OrderStatus.PENDING,
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
    }),
    __metadata("design:type", String)
], Order.prototype, "shippingAddress", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Order.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [product_model_1.Product]),
    (0, sequelize_typescript_1.BelongsToMany)(() => product_model_1.Product, () => order_product_model_1.OrderProduct),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
exports.Order = Order = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, sequelize_typescript_1.Table)({ tableName: 'orders' })
], Order);
//# sourceMappingURL=order.model.js.map