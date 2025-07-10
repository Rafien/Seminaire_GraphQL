import { Resolver, Int, Query, Mutation, Args, ID, InputType, Field, Float } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';

@InputType()
class CreateProductInput {
  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int) // Correction : utiliser Int pour stock
  stock: number;

  @Field({ nullable: true })
  image?: string;
}

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  async products() {
    return this.productsService.findAll();
  }

  @Query(() => Product)
  async product(@Args('id', { type: () => ID }) id: number) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  @UseGuards(AuthGuard('jwt'))
  async createProduct(@Args('input') input: CreateProductInput) {
    return this.productsService.create(input);
  }

  @Mutation(() => Product)
  @UseGuards(AuthGuard('jwt'))
  async updateProduct(
    @Args('id', { type: () => ID }) id: number,
    @Args('input') input: CreateProductInput,
  ) {
    return this.productsService.update(id, input);
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard('jwt'))
  async deleteProduct(@Args('id', { type: () => ID }) id: number) {
    await this.productsService.remove(id);
    return true;
  }
}