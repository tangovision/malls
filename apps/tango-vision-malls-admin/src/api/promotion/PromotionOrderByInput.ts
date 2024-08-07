import { SortOrder } from "../../util/SortOrder";

export type PromotionOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  discount?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  participatingStores?: SortOrder;
  promotionId?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
