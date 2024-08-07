import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type StoreReviewsCreateInput = {
  comments?: string | null;
  date?: Date | null;
  rating?: number | null;
  reviewId?: string | null;
  store?: StoreWhereUniqueInput | null;
  visitor?: VisitorWhereUniqueInput | null;
};
