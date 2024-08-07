import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type FeedbackUpdateInput = {
  comments?: string | null;
  date?: Date | null;
  feedbackId?: string | null;
  rating?: number | null;
  responseStatus?: "Option1" | null;
  visitor?: VisitorWhereUniqueInput | null;
};
