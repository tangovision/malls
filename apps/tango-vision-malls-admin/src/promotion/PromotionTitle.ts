import { Promotion as TPromotion } from "../api/promotion/Promotion";

export const PROMOTION_TITLE_FIELD = "title";

export const PromotionTitle = (record: TPromotion): string => {
  return record.title?.toString() || String(record.id);
};
