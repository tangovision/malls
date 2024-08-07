import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  feedbackId?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  responseStatus?: SortOrder;
  updatedAt?: SortOrder;
  visitorId?: SortOrder;
};
