import { FeedbackUpdateManyWithoutVisitorsInput } from "./FeedbackUpdateManyWithoutVisitorsInput";
import { StoreReviewsUpdateManyWithoutVisitorsInput } from "./StoreReviewsUpdateManyWithoutVisitorsInput";
import { TicketUpdateManyWithoutVisitorsInput } from "./TicketUpdateManyWithoutVisitorsInput";

export type VisitorUpdateInput = {
  email?: string | null;
  feedback?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutVisitorsInput;
  name?: string | null;
  phone?: string | null;
  preferences?: string | null;
  storeReviewsItems?: StoreReviewsUpdateManyWithoutVisitorsInput;
  tickets?: TicketUpdateManyWithoutVisitorsInput;
  visitDate?: Date | null;
  visitorId?: string | null;
};
