import { CustomerFeedback as TCustomerFeedback } from "../api/customerFeedback/CustomerFeedback";

export const CUSTOMERFEEDBACK_TITLE_FIELD = "id";

export const CustomerFeedbackTitle = (record: TCustomerFeedback): string => {
  return record.id?.toString() || String(record.id);
};
