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
exports.ProductsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const product_model_1 = require("../models/product.model");
let CreateProductInput = (() => {
    let _classDecorators = [(0, graphql_1.InputType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _price_decorators;
    let _price_initializers = [];
    let _price_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _stock_decorators;
    let _stock_initializers = [];
    let _stock_extraInitializers = [];
    let _image_decorators;
    let _image_initializers = [];
    let _image_extraInitializers = [];
    var CreateProductInput = _classThis = class {
        constructor() {
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.price = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _price_initializers, void 0));
            this.description = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.stock = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _stock_initializers, void 0));
            this.image = (__runInitializers(this, _stock_extraInitializers), __runInitializers(this, _image_initializers, void 0));
            __runInitializers(this, _image_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "CreateProductInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [(0, graphql_1.Field)()];
        _price_decorators = [(0, graphql_1.Field)(() => graphql_1.Float)];
        _description_decorators = [(0, graphql_1.Field)({ nullable: true })];
        _stock_decorators = [(0, graphql_1.Field)()];
        _image_decorators = [(0, graphql_1.Field)({ nullable: true })];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: obj => "price" in obj, get: obj => obj.price, set: (obj, value) => { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _stock_decorators, { kind: "field", name: "stock", static: false, private: false, access: { has: obj => "stock" in obj, get: obj => obj.stock, set: (obj, value) => { obj.stock = value; } }, metadata: _metadata }, _stock_initializers, _stock_extraInitializers);
        __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: obj => "image" in obj, get: obj => obj.image, set: (obj, value) => { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CreateProductInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CreateProductInput = _classThis;
})();
let ProductsResolver = (() => {
    let _classDecorators = [(0, graphql_1.Resolver)(() => product_model_1.Product)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _products_decorators;
    let _product_decorators;
    let _createProduct_decorators;
    let _updateProduct_decorators;
    let _deleteProduct_decorators;
    var ProductsResolver = _classThis = class {
        constructor(productsService) {
            this.productsService = (__runInitializers(this, _instanceExtraInitializers), productsService);
        }
        async products() {
            return this.productsService.findAll();
        }
        async product(id) {
            return this.productsService.findOne(id);
        }
        async createProduct(input) {
            return this.productsService.create(input);
        }
        async updateProduct(id, input) {
            return this.productsService.update(id, input);
        }
        async deleteProduct(id) {
            await this.productsService.remove(id);
            return true;
        }
    };
    __setFunctionName(_classThis, "ProductsResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _products_decorators = [(0, graphql_1.Query)(() => [product_model_1.Product])];
        _product_decorators = [(0, graphql_1.Query)(() => product_model_1.Product)];
        _createProduct_decorators = [(0, graphql_1.Mutation)(() => product_model_1.Product), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'))];
        _updateProduct_decorators = [(0, graphql_1.Mutation)(() => product_model_1.Product), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'))];
        _deleteProduct_decorators = [(0, graphql_1.Mutation)(() => Boolean), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'))];
        __esDecorate(_classThis, null, _products_decorators, { kind: "method", name: "products", static: false, private: false, access: { has: obj => "products" in obj, get: obj => obj.products }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _product_decorators, { kind: "method", name: "product", static: false, private: false, access: { has: obj => "product" in obj, get: obj => obj.product }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createProduct_decorators, { kind: "method", name: "createProduct", static: false, private: false, access: { has: obj => "createProduct" in obj, get: obj => obj.createProduct }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateProduct_decorators, { kind: "method", name: "updateProduct", static: false, private: false, access: { has: obj => "updateProduct" in obj, get: obj => obj.updateProduct }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteProduct_decorators, { kind: "method", name: "deleteProduct", static: false, private: false, access: { has: obj => "deleteProduct" in obj, get: obj => obj.deleteProduct }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductsResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductsResolver = _classThis;
})();
exports.ProductsResolver = ProductsResolver;
//# sourceMappingURL=products.resolver.js.map