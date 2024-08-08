import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type IssueCategoryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  parentCategoryId?: StringNullableFilter;
};
