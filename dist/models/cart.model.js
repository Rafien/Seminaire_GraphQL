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
exports.Cart = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
const cart_item_model_1 = require("./cart-item.model");
let Cart = class Cart extends sequelize_typescript_1.Model {
    get total() {
        if (!this.items || this.items.length === 0)
            return 0;
        return this.items.reduce((sum, item) => {
            const price = item.product?.price || 0;
            return sum + (price * item.quantity);
        }, 0);
    }
};
exports.Cart = Cart;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Cart.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Cart.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cart_item_model_1.CartItem]),
    (0, sequelize_typescript_1.HasMany)(() => cart_item_model_1.CartItem),
    __metadata("design:type", Array)
], Cart.prototype, "items", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Cart.prototype, "total", null);
exports.Cart = Cart = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, sequelize_typescript_1.Table)({ tableName: 'carts' })
], Cart);
//# sourceMappingURL=cart.model.js.map