import { FeedbackCreateNestedManyWithoutVisitorsInput } from "./FeedbackCreateNestedManyWithoutVisitorsInput";
import { StoreReviewsCreateNestedManyWithoutVisitorsInput } from "./StoreReviewsCreateNestedManyWithoutVisitorsInput";
import { TicketCreateNestedManyWithoutVisitorsInput } from "./TicketCreateNestedManyWithoutVisitorsInput";

export type VisitorCreateInput = {
  email?: string | null;
  feedback?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutVisitorsInput;
  name?: string | null;
  phone?: string | null;
  preferences?: string | null;
  storeReviewsItems?: StoreReviewsCreateNestedManyWithoutVisitorsInput;
  tickets?: TicketCreateNestedManyWithoutVisitorsInput;
  visitDate?: Date | null;
  visitorId?: string | null;
};
