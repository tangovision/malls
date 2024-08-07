import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdvertisementWhereInput = {
  adId?: StringNullableFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  placement?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  targetAudience?: StringNullableFilter;
  title?: StringNullableFilter;
};
