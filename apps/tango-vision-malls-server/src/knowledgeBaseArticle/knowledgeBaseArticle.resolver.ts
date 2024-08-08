import * as graphql from "@nestjs/graphql";
import { KnowledgeBaseArticleResolverBase } from "./base/knowledgeBaseArticle.resolver.base";
import { KnowledgeBaseArticle } from "./base/KnowledgeBaseArticle";
import { KnowledgeBaseArticleService } from "./knowledgeBaseArticle.service";

@graphql.Resolver(() => KnowledgeBaseArticle)
export class KnowledgeBaseArticleResolver extends KnowledgeBaseArticleResolverBase {
  constructor(protected readonly service: KnowledgeBaseArticleService) {
    super(service);
  }
}
