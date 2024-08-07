import { NewsletterSubscriptionWhereInput } from "./NewsletterSubscriptionWhereInput";
import { NewsletterSubscriptionOrderByInput } from "./NewsletterSubscriptionOrderByInput";

export type NewsletterSubscriptionFindManyArgs = {
  where?: NewsletterSubscriptionWhereInput;
  orderBy?: Array<NewsletterSubscriptionOrderByInput>;
  skip?: number;
  take?: number;
};
