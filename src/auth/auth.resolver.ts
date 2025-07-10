import { Resolver, Mutation, Args, ObjectType, Field } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';

@ObjectType()
class AuthPayload {
  @Field()
  access_token!: string;

  @Field(() => User)
  user!: User;
}

@Resolver(() => AuthPayload)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthPayload)
  async register(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<AuthPayload> {
    return this.authService.register(name, email, password);
  }

  @Mutation(() => AuthPayload)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<AuthPayload> {
    return this.authService.login(email, password);
  }
}