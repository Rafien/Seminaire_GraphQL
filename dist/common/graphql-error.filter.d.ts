import { ArgumentsHost, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
export declare class GraphQLErrorFilter implements GqlExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): {
        message: string;
        code: number;
        timestamp: string;
        path: any;
    };
}
