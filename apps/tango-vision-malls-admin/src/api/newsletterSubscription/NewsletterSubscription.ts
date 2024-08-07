export type NewsletterSubscription = {
  createdAt: Date;
  email: string | null;
  id: string;
  status?: "Option1" | null;
  subscriptionDate: Date | null;
  subscriptionId: string | null;
  updatedAt: Date;
};
