"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const cart_model_1 = require("../models/cart.model");
let CartResolver = (() => {
    let _classDecorators = [(0, graphql_1.Resolver)(() => cart_model_1.Cart), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'))];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _cart_decorators;
    let _addToCart_decorators;
    let _removeFromCart_decorators;
    let _clearCart_decorators;
    var CartResolver = _classThis = class {
        constructor(cartService) {
            this.cartService = (__runInitializers(this, _instanceExtraInitializers), cartService);
        }
        async cart(context) {
            const userId = context.req.user.id;
            return this.cartService.findOrCreateCart(userId);
        }
        async addToCart(productId, quantity, context) {
            const userId = context.req.user.id;
            return this.cartService.addToCart(userId, productId, quantity);
        }
        async removeFromCart(productId, context) {
            const userId = context.req.user.id;
            return this.cartService.removeFromCart(userId, productId);
        }
        async clearCart(context) {
            const userId = context.req.user.id;
            return this.cartService.clearCart(userId);
        }
    };
    __setFunctionName(_classThis, "CartResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _cart_decorators = [(0, graphql_1.Query)(() => cart_model_1.Cart)];
        _addToCart_decorators = [(0, graphql_1.Mutation)(() => cart_model_1.Cart)];
        _removeFromCart_decorators = [(0, graphql_1.Mutation)(() => cart_model_1.Cart)];
        _clearCart_decorators = [(0, graphql_1.Mutation)(() => cart_model_1.Cart)];
        __esDecorate(_classThis, null, _cart_decorators, { kind: "method", name: "cart", static: false, private: false, access: { has: obj => "cart" in obj, get: obj => obj.cart }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _addToCart_decorators, { kind: "method", name: "addToCart", static: false, private: false, access: { has: obj => "addToCart" in obj, get: obj => obj.addToCart }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _removeFromCart_decorators, { kind: "method", name: "removeFromCart", static: false, private: false, access: { has: obj => "removeFromCart" in obj, get: obj => obj.removeFromCart }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _clearCart_decorators, { kind: "method", name: "clearCart", static: false, private: false, access: { has: obj => "clearCart" in obj, get: obj => obj.clearCart }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CartResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CartResolver = _classThis;
})();
exports.CartResolver = CartResolver;
//# sourceMappingURL=cart.resolver.js.map