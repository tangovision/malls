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
import { KnowledgeBaseArticle } from "./KnowledgeBaseArticle";
import { KnowledgeBaseArticleCountArgs } from "./KnowledgeBaseArticleCountArgs";
import { KnowledgeBaseArticleFindManyArgs } from "./KnowledgeBaseArticleFindManyArgs";
import { KnowledgeBaseArticleFindUniqueArgs } from "./KnowledgeBaseArticleFindUniqueArgs";
import { CreateKnowledgeBaseArticleArgs } from "./CreateKnowledgeBaseArticleArgs";
import { UpdateKnowledgeBaseArticleArgs } from "./UpdateKnowledgeBaseArticleArgs";
import { DeleteKnowledgeBaseArticleArgs } from "./DeleteKnowledgeBaseArticleArgs";
import { KnowledgeBaseArticleService } from "../knowledgeBaseArticle.service";
@graphql.Resolver(() => KnowledgeBaseArticle)
export class KnowledgeBaseArticleResolverBase {
  constructor(protected readonly service: KnowledgeBaseArticleService) {}

  async _knowledgeBaseArticlesMeta(
    @graphql.Args() args: KnowledgeBaseArticleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [KnowledgeBaseArticle])
  async knowledgeBaseArticles(
    @graphql.Args() args: KnowledgeBaseArticleFindManyArgs
  ): Promise<KnowledgeBaseArticle[]> {
    return this.service.knowledgeBaseArticles(args);
  }

  @graphql.Query(() => KnowledgeBaseArticle, { nullable: true })
  async knowledgeBaseArticle(
    @graphql.Args() args: KnowledgeBaseArticleFindUniqueArgs
  ): Promise<KnowledgeBaseArticle | null> {
    const result = await this.service.knowledgeBaseArticle(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => KnowledgeBaseArticle)
  async createKnowledgeBaseArticle(
    @graphql.Args() args: CreateKnowledgeBaseArticleArgs
  ): Promise<KnowledgeBaseArticle> {
    return await this.service.createKnowledgeBaseArticle({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => KnowledgeBaseArticle)
  async updateKnowledgeBaseArticle(
    @graphql.Args() args: UpdateKnowledgeBaseArticleArgs
  ): Promise<KnowledgeBaseArticle | null> {
    try {
      return await this.service.updateKnowledgeBaseArticle({
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

  @graphql.Mutation(() => KnowledgeBaseArticle)
  async deleteKnowledgeBaseArticle(
    @graphql.Args() args: DeleteKnowledgeBaseArticleArgs
  ): Promise<KnowledgeBaseArticle | null> {
    try {
      return await this.service.deleteKnowledgeBaseArticle(args);
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