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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const order_model_1 = require("../models/order.model");
const order_product_model_1 = require("../models/order-product.model");
const cart_service_1 = require("../cart/cart.service");
const products_service_1 = require("../products/products.service");
let OrdersService = class OrdersService {
    constructor(orderModel, orderProductModel, cartService, productsService) {
        this.orderModel = orderModel;
        this.orderProductModel = orderProductModel;
        this.cartService = cartService;
        this.productsService = productsService;
    }
    async createOrder(userId, shippingAddress) {
        const cart = await this.cartService.findOrCreateCart(userId);
        if (!cart.items || cart.items.length === 0) {
            throw new Error('Cart is empty');
        }
        let total = 0;
        const orderItems = [];
        for (const item of cart.items) {
            const product = await this.productsService.findOne(item.productId);
            if (!product) {
                throw new common_1.NotFoundException(`Product with id ${item.productId} not found`);
            }
            const itemTotal = product.price * item.quantity;
            total += itemTotal;
            orderItems.push({
                productId: item.productId,
                quantity: item.quantity,
                price: product.price,
            });
            await this.productsService.updateStock(item.productId, item.quantity);
        }
        const order = await this.orderModel.create({
            userId,
            total,
            shippingAddress,
            status: order_model_1.OrderStatus.PENDING,
        });
        for (const item of orderItems) {
            await this.orderProductModel.create({
                orderId: order.id,
                ...item,
            });
        }
        await this.cartService.clearCart(userId);
        return this.findOne(order.id);
    }
    async findAll() {
        return this.orderModel.findAll({
            include: ['user', 'products'],
        });
    }
    async findOne(id) {
        const order = await this.orderModel.findByPk(id, {
            include: ['user', 'products'],
        });
        if (!order) {
            throw new common_1.NotFoundException(`Order with id ${id} not found`);
        }
        return order;
    }
    async findByUser(userId) {
        return this.orderModel.findAll({
            where: { userId },
            include: ['products'],
        });
    }
    async updateStatus(id, status) {
        const order = await this.findOne(id);
        await this.orderModel.update({ status }, { where: { id } });
        return this.findOne(id);
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(order_model_1.Order)),
    __param(1, (0, sequelize_1.InjectModel)(order_product_model_1.OrderProduct)),
    __metadata("design:paramtypes", [Object, Object, cart_service_1.CartService,
        products_service_1.ProductsService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map