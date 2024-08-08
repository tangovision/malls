import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CustomerFeedbackWhereInput = {
  comments?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
};
