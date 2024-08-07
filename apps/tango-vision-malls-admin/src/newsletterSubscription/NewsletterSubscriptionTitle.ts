import { NewsletterSubscription as TNewsletterSubscription } from "../api/newsletterSubscription/NewsletterSubscription";

export const NEWSLETTERSUBSCRIPTION_TITLE_FIELD = "subscriptionId";

export const NewsletterSubscriptionTitle = (
  record: TNewsletterSubscription
): string => {
  return record.subscriptionId?.toString() || String(record.id);
};
