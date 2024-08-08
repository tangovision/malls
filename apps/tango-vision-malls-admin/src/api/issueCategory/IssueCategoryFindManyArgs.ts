import { IssueCategoryWhereInput } from "./IssueCategoryWhereInput";
import { IssueCategoryOrderByInput } from "./IssueCategoryOrderByInput";

export type IssueCategoryFindManyArgs = {
  where?: IssueCategoryWhereInput;
  orderBy?: Array<IssueCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
