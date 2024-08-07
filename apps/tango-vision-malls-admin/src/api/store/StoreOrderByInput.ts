import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  category?: SortOrder;
  contactNumber?: SortOrder;
  contactPerson?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  openingHours?: SortOrder;
  socialMediaLinks?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
};
