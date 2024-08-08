import { SortOrder } from "../../util/SortOrder";

export type KnowledgeBaseArticleOrderByInput = {
  author?: SortOrder;
  categoryId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  creationDate?: SortOrder;
  id?: SortOrder;
  lastUpdatedDate?: SortOrder;
  tags?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
