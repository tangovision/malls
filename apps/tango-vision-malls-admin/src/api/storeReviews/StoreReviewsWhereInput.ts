import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type StoreReviewsWhereInput = {
  comments?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  reviewId?: StringNullableFilter;
  store?: StoreWhereUniqueInput;
  visitor?: VisitorWhereUniqueInput;
};
