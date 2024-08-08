import { SortOrder } from "../../util/SortOrder";

export type ServiceLevelAgreementOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  penalties?: SortOrder;
  priority?: SortOrder;
  resolutionTime?: SortOrder;
  responseTime?: SortOrder;
  updatedAt?: SortOrder;
};
