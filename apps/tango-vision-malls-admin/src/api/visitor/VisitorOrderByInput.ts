import { SortOrder } from "../../util/SortOrder";

export type VisitorOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  feedback?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  preferences?: SortOrder;
  updatedAt?: SortOrder;
  visitDate?: SortOrder;
  visitorId?: SortOrder;
};
