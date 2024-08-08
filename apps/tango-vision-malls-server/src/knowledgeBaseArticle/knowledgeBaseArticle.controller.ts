import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KnowledgeBaseArticleService } from "./knowledgeBaseArticle.service";
import { KnowledgeBaseArticleControllerBase } from "./base/knowledgeBaseArticle.controller.base";

@swagger.ApiTags("knowledgeBaseArticles")
@common.Controller("knowledgeBaseArticles")
export class KnowledgeBaseArticleController extends KnowledgeBaseArticleControllerBase {
  constructor(protected readonly service: KnowledgeBaseArticleService) {
    super(service);
  }
}
