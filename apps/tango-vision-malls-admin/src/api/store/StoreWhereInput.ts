import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StoreReviewsListRelationFilter } from "../storeReviews/StoreReviewsListRelationFilter";

export type StoreWhereInput = {
  category?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  contactPerson?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  openingHours?: StringNullableFilter;
  socialMediaLinks?: StringNullableFilter;
  storeId?: StringNullableFilter;
  storeReviewsItems?: StoreReviewsListRelationFilter;
  website?: StringNullableFilter;
};
