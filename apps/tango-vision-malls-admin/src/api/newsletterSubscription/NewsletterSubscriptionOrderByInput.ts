import { SortOrder } from "../../util/SortOrder";

export type NewsletterSubscriptionOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  subscriptionDate?: SortOrder;
  subscriptionId?: SortOrder;
  updatedAt?: SortOrder;
};
