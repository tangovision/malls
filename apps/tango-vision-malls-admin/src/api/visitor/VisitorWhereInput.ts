import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StoreReviewsListRelationFilter } from "../storeReviews/StoreReviewsListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type VisitorWhereInput = {
  email?: StringNullableFilter;
  feedback?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  preferences?: StringNullableFilter;
  storeReviewsItems?: StoreReviewsListRelationFilter;
  tickets?: TicketListRelationFilter;
  visitDate?: DateTimeNullableFilter;
  visitorId?: StringNullableFilter;
};
