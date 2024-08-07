import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NewsletterSubscriptionWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  subscriptionDate?: DateTimeNullableFilter;
  subscriptionId?: StringNullableFilter;
};
