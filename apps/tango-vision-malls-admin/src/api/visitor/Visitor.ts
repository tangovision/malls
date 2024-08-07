import { Feedback } from "../feedback/Feedback";
import { StoreReviews } from "../storeReviews/StoreReviews";

export type Visitor = {
  createdAt: Date;
  email: string | null;
  feedback: string | null;
  feedbacks?: Array<Feedback>;
  id: string;
  name: string | null;
  phone: string | null;
  preferences: string | null;
  storeReviewsItems?: Array<StoreReviews>;
  updatedAt: Date;
  visitDate: Date | null;
  visitorId: string | null;
};
