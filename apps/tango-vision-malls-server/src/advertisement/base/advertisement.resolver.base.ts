/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Advertisement } from "./Advertisement";
import { AdvertisementCountArgs } from "./AdvertisementCountArgs";
import { AdvertisementFindManyArgs } from "./AdvertisementFindManyArgs";
import { AdvertisementFindUniqueArgs } from "./AdvertisementFindUniqueArgs";
import { CreateAdvertisementArgs } from "./CreateAdvertisementArgs";
import { UpdateAdvertisementArgs } from "./UpdateAdvertisementArgs";
import { DeleteAdvertisementArgs } from "./DeleteAdvertisementArgs";
import { AdvertisementService } from "../advertisement.service";
@graphql.Resolver(() => Advertisement)
export class AdvertisementResolverBase {
  constructor(protected readonly service: AdvertisementService) {}

  async _advertisementsMeta(
    @graphql.Args() args: AdvertisementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Advertisement])
  async advertisements(
    @graphql.Args() args: AdvertisementFindManyArgs
  ): Promise<Advertisement[]> {
    return this.service.advertisements(args);
  }

  @graphql.Query(() => Advertisement, { nullable: true })
  async advertisement(
    @graphql.Args() args: AdvertisementFindUniqueArgs
  ): Promise<Advertisement | null> {
    const result = await this.service.advertisement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Advertisement)
  async createAdvertisement(
    @graphql.Args() args: CreateAdvertisementArgs
  ): Promise<Advertisement> {
    return await this.service.createAdvertisement({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Advertisement)
  async updateAdvertisement(
    @graphql.Args() args: UpdateAdvertisementArgs
  ): Promise<Advertisement | null> {
    try {
      return await this.service.updateAdvertisement({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Advertisement)
  async deleteAdvertisement(
    @graphql.Args() args: DeleteAdvertisementArgs
  ): Promise<Advertisement | null> {
    try {
      return await this.service.deleteAdvertisement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
