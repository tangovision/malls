import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  organizer?: SortOrder;
  participants?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
