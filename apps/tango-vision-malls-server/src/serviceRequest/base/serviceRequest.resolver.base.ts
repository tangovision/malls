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
import { ServiceRequest } from "./ServiceRequest";
import { ServiceRequestCountArgs } from "./ServiceRequestCountArgs";
import { ServiceRequestFindManyArgs } from "./ServiceRequestFindManyArgs";
import { ServiceRequestFindUniqueArgs } from "./ServiceRequestFindUniqueArgs";
import { CreateServiceRequestArgs } from "./CreateServiceRequestArgs";
import { UpdateServiceRequestArgs } from "./UpdateServiceRequestArgs";
import { DeleteServiceRequestArgs } from "./DeleteServiceRequestArgs";
import { ServiceRequestService } from "../serviceRequest.service";
@graphql.Resolver(() => ServiceRequest)
export class ServiceRequestResolverBase {
  constructor(protected readonly service: ServiceRequestService) {}

  async _serviceRequestsMeta(
    @graphql.Args() args: ServiceRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ServiceRequest])
  async serviceRequests(
    @graphql.Args() args: ServiceRequestFindManyArgs
  ): Promise<ServiceRequest[]> {
    return this.service.serviceRequests(args);
  }

  @graphql.Query(() => ServiceRequest, { nullable: true })
  async serviceRequest(
    @graphql.Args() args: ServiceRequestFindUniqueArgs
  ): Promise<ServiceRequest | null> {
    const result = await this.service.serviceRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ServiceRequest)
  async createServiceRequest(
    @graphql.Args() args: CreateServiceRequestArgs
  ): Promise<ServiceRequest> {
    return await this.service.createServiceRequest({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ServiceRequest)
  async updateServiceRequest(
    @graphql.Args() args: UpdateServiceRequestArgs
  ): Promise<ServiceRequest | null> {
    try {
      return await this.service.updateServiceRequest({
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

  @graphql.Mutation(() => ServiceRequest)
  async deleteServiceRequest(
    @graphql.Args() args: DeleteServiceRequestArgs
  ): Promise<ServiceRequest | null> {
    try {
      return await this.service.deleteServiceRequest(args);
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
