import { StoreReviews as TStoreReviews } from "../api/storeReviews/StoreReviews";

export const STOREREVIEWS_TITLE_FIELD = "reviewId";

export const StoreReviewsTitle = (record: TStoreReviews): string => {
  return record.reviewId?.toString() || String(record.id);
};
