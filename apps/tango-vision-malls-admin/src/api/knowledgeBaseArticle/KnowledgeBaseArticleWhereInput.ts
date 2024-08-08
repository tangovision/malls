import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type KnowledgeBaseArticleWhereInput = {
  author?: StringNullableFilter;
  categoryId?: StringNullableFilter;
  content?: StringNullableFilter;
  creationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  lastUpdatedDate?: DateTimeNullableFilter;
  tags?: StringNullableFilter;
  title?: StringNullableFilter;
};
