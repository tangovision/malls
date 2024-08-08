import { CustomerFeedbackWhereInput } from "./CustomerFeedbackWhereInput";
import { CustomerFeedbackOrderByInput } from "./CustomerFeedbackOrderByInput";

export type CustomerFeedbackFindManyArgs = {
  where?: CustomerFeedbackWhereInput;
  orderBy?: Array<CustomerFeedbackOrderByInput>;
  skip?: number;
  take?: number;
};
