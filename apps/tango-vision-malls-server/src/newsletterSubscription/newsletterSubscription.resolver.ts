import * as graphql from "@nestjs/graphql";
import { NewsletterSubscriptionResolverBase } from "./base/newsletterSubscription.resolver.base";
import { NewsletterSubscription } from "./base/NewsletterSubscription";
import { NewsletterSubscriptionService } from "./newsletterSubscription.service";

@graphql.Resolver(() => NewsletterSubscription)
export class NewsletterSubscriptionResolver extends NewsletterSubscriptionResolverBase {
  constructor(protected readonly service: NewsletterSubscriptionService) {
    super(service);
  }
}
