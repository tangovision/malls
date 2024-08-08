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
import { CustomerFeedback } from "./CustomerFeedback";
import { CustomerFeedbackCountArgs } from "./CustomerFeedbackCountArgs";
import { CustomerFeedbackFindManyArgs } from "./CustomerFeedbackFindManyArgs";
import { CustomerFeedbackFindUniqueArgs } from "./CustomerFeedbackFindUniqueArgs";
import { CreateCustomerFeedbackArgs } from "./CreateCustomerFeedbackArgs";
import { UpdateCustomerFeedbackArgs } from "./UpdateCustomerFeedbackArgs";
import { DeleteCustomerFeedbackArgs } from "./DeleteCustomerFeedbackArgs";
import { CustomerFeedbackService } from "../customerFeedback.service";
@graphql.Resolver(() => CustomerFeedback)
export class CustomerFeedbackResolverBase {
  constructor(protected readonly service: CustomerFeedbackService) {}

  async _customerFeedbacksMeta(
    @graphql.Args() args: CustomerFeedbackCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CustomerFeedback])
  async customerFeedbacks(
    @graphql.Args() args: CustomerFeedbackFindManyArgs
  ): Promise<CustomerFeedback[]> {
    return this.service.customerFeedbacks(args);
  }

  @graphql.Query(() => CustomerFeedback, { nullable: true })
  async customerFeedback(
    @graphql.Args() args: CustomerFeedbackFindUniqueArgs
  ): Promise<CustomerFeedback | null> {
    const result = await this.service.customerFeedback(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CustomerFeedback)
  async createCustomerFeedback(
    @graphql.Args() args: CreateCustomerFeedbackArgs
  ): Promise<CustomerFeedback> {
    return await this.service.createCustomerFeedback({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CustomerFeedback)
  async updateCustomerFeedback(
    @graphql.Args() args: UpdateCustomerFeedbackArgs
  ): Promise<CustomerFeedback | null> {
    try {
      return await this.service.updateCustomerFeedback({
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

  @graphql.Mutation(() => CustomerFeedback)
  async deleteCustomerFeedback(
    @graphql.Args() args: DeleteCustomerFeedbackArgs
  ): Promise<CustomerFeedback | null> {
    try {
      return await this.service.deleteCustomerFeedback(args);
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
