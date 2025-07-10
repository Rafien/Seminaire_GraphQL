import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';

@Catch(HttpException)
export class GraphQLErrorFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const info = gqlHost.getInfo();
    const ctx = gqlHost.getContext();

    return {
      message: exception.message,
      code: exception.getStatus(),
      timestamp: new Date().toISOString(),
      path: info.path,
    };
  }
}