import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KnowledgeBaseArticleServiceBase } from "./base/knowledgeBaseArticle.service.base";

@Injectable()
export class KnowledgeBaseArticleService extends KnowledgeBaseArticleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
