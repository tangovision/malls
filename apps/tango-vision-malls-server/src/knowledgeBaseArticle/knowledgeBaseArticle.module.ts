import { Module } from "@nestjs/common";
import { KnowledgeBaseArticleModuleBase } from "./base/knowledgeBaseArticle.module.base";
import { KnowledgeBaseArticleService } from "./knowledgeBaseArticle.service";
import { KnowledgeBaseArticleController } from "./knowledgeBaseArticle.controller";
import { KnowledgeBaseArticleResolver } from "./knowledgeBaseArticle.resolver";

@Module({
  imports: [KnowledgeBaseArticleModuleBase],
  controllers: [KnowledgeBaseArticleController],
  providers: [KnowledgeBaseArticleService, KnowledgeBaseArticleResolver],
  exports: [KnowledgeBaseArticleService],
})
export class KnowledgeBaseArticleModule {}
