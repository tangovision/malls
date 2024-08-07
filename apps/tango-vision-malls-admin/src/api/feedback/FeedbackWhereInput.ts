import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type FeedbackWhereInput = {
  comments?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  feedbackId?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  responseStatus?: "Option1";
  visitor?: VisitorWhereUniqueInput;
};
