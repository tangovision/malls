import { SortOrder } from "../../util/SortOrder";

export type IssueCategoryOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parentCategoryId?: SortOrder;
  updatedAt?: SortOrder;
};
