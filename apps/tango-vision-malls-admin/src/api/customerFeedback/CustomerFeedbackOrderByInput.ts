import { SortOrder } from "../../util/SortOrder";

export type CustomerFeedbackOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
