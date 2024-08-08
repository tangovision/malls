import { KnowledgeBaseArticleWhereInput } from "./KnowledgeBaseArticleWhereInput";
import { KnowledgeBaseArticleOrderByInput } from "./KnowledgeBaseArticleOrderByInput";

export type KnowledgeBaseArticleFindManyArgs = {
  where?: KnowledgeBaseArticleWhereInput;
  orderBy?: Array<KnowledgeBaseArticleOrderByInput>;
  skip?: number;
  take?: number;
};
