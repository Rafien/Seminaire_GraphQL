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
exports.OrdersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const order_model_1 = require("../models/order.model");
const orders_service_1 = require("./orders.service");
let OrdersResolver = class OrdersResolver {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async orders(context) {
        const userId = context.req.user.id;
        return this.ordersService.findByUser(userId);
    }
    async order(id) {
        return this.ordersService.findOne(id);
    }
    async createOrder(shippingAddress, context) {
        const userId = context.req.user.id;
        return this.ordersService.createOrder(userId, shippingAddress);
    }
    async updateOrderStatus(id, status) {
        return this.ordersService.updateStatus(id, status);
    }
};
exports.OrdersResolver = OrdersResolver;
__decorate([
    (0, graphql_1.Query)(() => [order_model_1.Order]),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "orders", null);
__decorate([
    (0, graphql_1.Query)(() => order_model_1.Order),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "order", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_model_1.Order),
    __param(0, (0, graphql_1.Args)('shippingAddress')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_model_1.Order),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('status', { type: () => order_model_1.OrderStatus })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "updateOrderStatus", null);
exports.OrdersResolver = OrdersResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_model_1.Order),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersResolver);
//# sourceMappingURL=orders.resolver.js.map