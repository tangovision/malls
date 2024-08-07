import { StoreReviewsWhereInput } from "./StoreReviewsWhereInput";
import { StoreReviewsOrderByInput } from "./StoreReviewsOrderByInput";

export type StoreReviewsFindManyArgs = {
  where?: StoreReviewsWhereInput;
  orderBy?: Array<StoreReviewsOrderByInput>;
  skip?: number;
  take?: number;
};
