import { Store } from "../store/Store";
import { Visitor } from "../visitor/Visitor";

export type StoreReviews = {
  comments: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  rating: number | null;
  reviewId: string | null;
  store?: Store | null;
  updatedAt: Date;
  visitor?: Visitor | null;
};
