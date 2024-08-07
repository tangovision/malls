import { Visitor } from "../visitor/Visitor";

export type Feedback = {
  comments: string | null;
  createdAt: Date;
  date: Date | null;
  feedbackId: string | null;
  id: string;
  rating: number | null;
  responseStatus?: "Option1" | null;
  updatedAt: Date;
  visitor?: Visitor | null;
};
