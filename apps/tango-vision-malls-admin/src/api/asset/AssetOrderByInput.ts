import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  assignedTo?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  purchaseDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  warrantyExpirationDate?: SortOrder;
};
