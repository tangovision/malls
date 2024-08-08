import { SortOrder } from "../../util/SortOrder";

export type ServiceRequestOrderByInput = {
  assignedTo?: SortOrder;
  completionDate?: SortOrder;
  createdAt?: SortOrder;
  creationDate?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  requestType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
