import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type TicketWhereInput = {
  assignedTo?: StringNullableFilter;
  category?: StringNullableFilter;
  creationDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  resolution?: StringNullableFilter;
  resolutionDate?: DateTimeNullableFilter;
  status?: "Option1";
  tenant?: TenantWhereUniqueInput;
  title?: StringNullableFilter;
  visitor?: VisitorWhereUniqueInput;
};
