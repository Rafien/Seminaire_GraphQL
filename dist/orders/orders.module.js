"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const order_model_1 = require("../models/order.model");
const order_product_model_1 = require("../models/order-product.model");
const cart_module_1 = require("../cart/cart.module");
const products_module_1 = require("../products/products.module");
const payment_module_1 = require("../payment/payment.module");
const orders_service_1 = require("./orders.service");
const orders_resolver_1 = require("./orders.resolver");
let OrdersModule = class OrdersModule {
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([order_model_1.Order, order_product_model_1.OrderProduct]),
            cart_module_1.CartModule,
            products_module_1.ProductsModule,
            (0, common_1.forwardRef)(() => payment_module_1.PaymentModule),
        ],
        providers: [orders_service_1.OrdersService, orders_resolver_1.OrdersResolver],
        exports: [orders_service_1.OrdersService],
    })
], OrdersModule);
//# sourceMappingURL=orders.module.js.map