import { StoreReviewsUpdateManyWithoutStoresInput } from "./StoreReviewsUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  category?: string | null;
  contactNumber?: string | null;
  contactPerson?: string | null;
  email?: string | null;
  location?: string | null;
  name?: string | null;
  openingHours?: string | null;
  socialMediaLinks?: string | null;
  storeId?: string | null;
  storeReviewsItems?: StoreReviewsUpdateManyWithoutStoresInput;
  website?: string | null;
};
