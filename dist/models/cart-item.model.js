"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const graphql_1 = require("@nestjs/graphql");
const cart_model_1 = require("./cart.model");
const product_model_1 = require("./product.model");
let CartItem = (() => {
    let _classDecorators = [(0, graphql_1.ObjectType)(), (0, sequelize_typescript_1.Table)({ tableName: 'cart_items' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _quantity_decorators;
    let _quantity_initializers = [];
    let _quantity_extraInitializers = [];
    let _cartId_decorators;
    let _cartId_initializers = [];
    let _cartId_extraInitializers = [];
    let _productId_decorators;
    let _productId_initializers = [];
    let _productId_extraInitializers = [];
    let _cart_decorators;
    let _cart_initializers = [];
    let _cart_extraInitializers = [];
    let _product_decorators;
    let _product_initializers = [];
    let _product_extraInitializers = [];
    var CartItem = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.quantity = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _quantity_initializers, void 0));
            this.cartId = (__runInitializers(this, _quantity_extraInitializers), __runInitializers(this, _cartId_initializers, void 0));
            this.productId = (__runInitializers(this, _cartId_extraInitializers), __runInitializers(this, _productId_initializers, void 0));
            this.cart = (__runInitializers(this, _productId_extraInitializers), __runInitializers(this, _cart_initializers, void 0));
            this.product = (__runInitializers(this, _cart_extraInitializers), __runInitializers(this, _product_initializers, void 0));
            __runInitializers(this, _product_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "CartItem");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        _id_decorators = [(0, graphql_1.Field)(() => graphql_1.ID), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            })];
        _quantity_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                defaultValue: 1,
            })];
        _cartId_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => cart_model_1.Cart), sequelize_typescript_1.Column];
        _productId_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => product_model_1.Product), sequelize_typescript_1.Column];
        _cart_decorators = [(0, graphql_1.Field)(() => cart_model_1.Cart), (0, sequelize_typescript_1.BelongsTo)(() => cart_model_1.Cart)];
        _product_decorators = [(0, graphql_1.Field)(() => product_model_1.Product), (0, sequelize_typescript_1.BelongsTo)(() => product_model_1.Product)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _quantity_decorators, { kind: "field", name: "quantity", static: false, private: false, access: { has: obj => "quantity" in obj, get: obj => obj.quantity, set: (obj, value) => { obj.quantity = value; } }, metadata: _metadata }, _quantity_initializers, _quantity_extraInitializers);
        __esDecorate(null, null, _cartId_decorators, { kind: "field", name: "cartId", static: false, private: false, access: { has: obj => "cartId" in obj, get: obj => obj.cartId, set: (obj, value) => { obj.cartId = value; } }, metadata: _metadata }, _cartId_initializers, _cartId_extraInitializers);
        __esDecorate(null, null, _productId_decorators, { kind: "field", name: "productId", static: false, private: false, access: { has: obj => "productId" in obj, get: obj => obj.productId, set: (obj, value) => { obj.productId = value; } }, metadata: _metadata }, _productId_initializers, _productId_extraInitializers);
        __esDecorate(null, null, _cart_decorators, { kind: "field", name: "cart", static: false, private: false, access: { has: obj => "cart" in obj, get: obj => obj.cart, set: (obj, value) => { obj.cart = value; } }, metadata: _metadata }, _cart_initializers, _cart_extraInitializers);
        __esDecorate(null, null, _product_decorators, { kind: "field", name: "product", static: false, private: false, access: { has: obj => "product" in obj, get: obj => obj.product, set: (obj, value) => { obj.product = value; } }, metadata: _metadata }, _product_initializers, _product_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CartItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CartItem = _classThis;
})();
exports.CartItem = CartItem;
//# sourceMappingURL=cart-item.model.js.map