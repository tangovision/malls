import { SortOrder } from "../../util/SortOrder";

export type StoreReviewsOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  reviewId?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
  visitorId?: SortOrder;
};
