import { SortOrder } from "../../util/SortOrder";

export type LoyaltyProgramOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  loyaltyProgramId?: SortOrder;
  name?: SortOrder;
  participants?: SortOrder;
  pointsEarned?: SortOrder;
  rewards?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
