"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const user_model_1 = require("./models/user.model");
const product_model_1 = require("./models/product.model");
const order_model_1 = require("./models/order.model");
const order_product_model_1 = require("./models/order-product.model");
const cart_model_1 = require("./models/cart.model");
const cart_item_model_1 = require("./models/cart-item.model");
const users_module_1 = require("./users/users.module");
const products_module_1 = require("./products/products.module");
const orders_module_1 = require("./orders/orders.module");
const cart_module_1 = require("./cart/cart.module");
const payment_module_1 = require("./payment/payment.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: 'src/schema.gql',
                playground: true,
                context: ({ req }) => ({ req }),
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT || '5432'),
                username: process.env.DB_USERNAME || 'postgres',
                password: process.env.DB_PASSWORD || 'password',
                database: process.env.DB_NAME || 'ecommerce',
                models: [user_model_1.User, product_model_1.Product, order_model_1.Order, order_product_model_1.OrderProduct, cart_model_1.Cart, cart_item_model_1.CartItem],
                autoLoadModels: true,
                synchronize: true,
            }),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET || 'your-secret-key',
                signOptions: { expiresIn: '24h' },
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            orders_module_1.OrdersModule,
            cart_module_1.CartModule,
            payment_module_1.PaymentModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map