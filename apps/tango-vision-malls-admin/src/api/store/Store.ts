import { StoreReviews } from "../storeReviews/StoreReviews";

export type Store = {
  category: string | null;
  contactNumber: string | null;
  contactPerson: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  location: string | null;
  name: string | null;
  openingHours: string | null;
  socialMediaLinks: string | null;
  storeId: string | null;
  storeReviewsItems?: Array<StoreReviews>;
  updatedAt: Date;
  website: string | null;
};
