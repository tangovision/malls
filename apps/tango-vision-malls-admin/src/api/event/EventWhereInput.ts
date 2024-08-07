import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  eventId?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  organizer?: StringNullableFilter;
  participants?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
};
