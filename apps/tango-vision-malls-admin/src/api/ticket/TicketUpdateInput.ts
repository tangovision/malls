import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type TicketUpdateInput = {
  assignedTo?: string | null;
  category?: string | null;
  creationDate?: Date | null;
  description?: string | null;
  dueDate?: Date | null;
  priority?: "Option1" | null;
  resolution?: string | null;
  resolutionDate?: Date | null;
  status?: "Option1" | null;
  tenant?: TenantWhereUniqueInput | null;
  title?: string | null;
  visitor?: VisitorWhereUniqueInput | null;
};
