import { FeedbackCreateNestedManyWithoutVisitorsInput } from "./FeedbackCreateNestedManyWithoutVisitorsInput";
import { StoreReviewsCreateNestedManyWithoutVisitorsInput } from "./StoreReviewsCreateNestedManyWithoutVisitorsInput";

export type VisitorCreateInput = {
  email?: string | null;
  feedback?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutVisitorsInput;
  name?: string | null;
  phone?: string | null;
  preferences?: string | null;
  storeReviewsItems?: StoreReviewsCreateNestedManyWithoutVisitorsInput;
  visitDate?: Date | null;
  visitorId?: string | null;
};
