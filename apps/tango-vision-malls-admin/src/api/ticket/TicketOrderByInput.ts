import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  assignedTo?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  creationDate?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  resolution?: SortOrder;
  resolutionDate?: SortOrder;
  status?: SortOrder;
  tenantId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  visitorId?: SortOrder;
};
