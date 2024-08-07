import { SortOrder } from "../../util/SortOrder";

export type AdvertisementOrderByInput = {
  adId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  placement?: SortOrder;
  startDate?: SortOrder;
  targetAudience?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
