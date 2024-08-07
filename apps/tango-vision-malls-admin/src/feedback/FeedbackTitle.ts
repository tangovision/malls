import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "feedbackId";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.feedbackId?.toString() || String(record.id);
};
