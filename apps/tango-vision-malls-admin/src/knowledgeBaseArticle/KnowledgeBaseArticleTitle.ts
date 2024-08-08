import { KnowledgeBaseArticle as TKnowledgeBaseArticle } from "../api/knowledgeBaseArticle/KnowledgeBaseArticle";

export const KNOWLEDGEBASEARTICLE_TITLE_FIELD = "title";

export const KnowledgeBaseArticleTitle = (
  record: TKnowledgeBaseArticle
): string => {
  return record.title?.toString() || String(record.id);
};
