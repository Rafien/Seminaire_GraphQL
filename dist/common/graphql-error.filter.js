"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
let GraphQLErrorFilter = class GraphQLErrorFilter {
    catch(exception, host) {
        const gqlHost = graphql_1.GqlArgumentsHost.create(host);
        const info = gqlHost.getInfo();
        const ctx = gqlHost.getContext();
        return {
            message: exception.message,
            code: exception.getStatus(),
            timestamp: new Date().toISOString(),
            path: info.path,
        };
    }
};
exports.GraphQLErrorFilter = GraphQLErrorFilter;
exports.GraphQLErrorFilter = GraphQLErrorFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], GraphQLErrorFilter);
//# sourceMappingURL=graphql-error.filter.js.map