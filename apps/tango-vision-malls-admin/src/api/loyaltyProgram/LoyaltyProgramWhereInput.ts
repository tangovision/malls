import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LoyaltyProgramWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  loyaltyProgramId?: StringNullableFilter;
  name?: StringNullableFilter;
  participants?: StringNullableFilter;
  pointsEarned?: IntNullableFilter;
  rewards?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
