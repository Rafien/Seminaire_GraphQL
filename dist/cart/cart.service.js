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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const cart_model_1 = require("../models/cart.model");
const cart_item_model_1 = require("../models/cart-item.model");
const product_model_1 = require("../models/product.model");
let CartService = class CartService {
    constructor(cartModel, cartItemModel) {
        this.cartModel = cartModel;
        this.cartItemModel = cartItemModel;
    }
    async findOrCreateCart(userId) {
        let cart = await this.cartModel.findOne({
            where: { userId },
            include: [{ model: cart_item_model_1.CartItem, include: [product_model_1.Product] }],
        });
        if (!cart) {
            cart = await this.cartModel.create({ userId });
            cart = await this.cartModel.findByPk(cart.id, {
                include: [{ model: cart_item_model_1.CartItem, include: [product_model_1.Product] }],
            });
        }
        return cart;
    }
    async addToCart(userId, productId, quantity) {
        const cart = await this.findOrCreateCart(userId);
        const existingItem = await this.cartItemModel.findOne({
            where: { cartId: cart.id, productId },
        });
        if (existingItem) {
            existingItem.quantity += quantity;
            await existingItem.save();
        }
        else {
            await this.cartItemModel.create({
                cartId: cart.id,
                productId,
                quantity,
            });
        }
        return this.findOrCreateCart(userId);
    }
    async removeFromCart(userId, productId) {
        const cart = await this.findOrCreateCart(userId);
        await this.cartItemModel.destroy({
            where: { cartId: cart.id, productId },
        });
        return this.findOrCreateCart(userId);
    }
    async clearCart(userId) {
        const cart = await this.findOrCreateCart(userId);
        await this.cartItemModel.destroy({
            where: { cartId: cart.id },
        });
        return this.findOrCreateCart(userId);
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(cart_model_1.Cart)),
    __param(1, (0, sequelize_1.InjectModel)(cart_item_model_1.CartItem)),
    __metadata("design:paramtypes", [Object, Object])
], CartService);
//# sourceMappingURL=cart.service.js.map