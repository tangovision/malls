import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PromotionWhereInput = {
  description?: StringNullableFilter;
  discount?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  participatingStores?: StringNullableFilter;
  promotionId?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
