import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AssetWhereInput = {
  assignedTo?: StringNullableFilter;
  category?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  purchaseDate?: DateTimeNullableFilter;
  status?: "Option1";
  warrantyExpirationDate?: DateTimeNullableFilter;
};
