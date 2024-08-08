import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ServiceRequestWhereInput = {
  assignedTo?: StringNullableFilter;
  completionDate?: DateTimeNullableFilter;
  creationDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  requestType?: StringNullableFilter;
  status?: "Option1";
};
