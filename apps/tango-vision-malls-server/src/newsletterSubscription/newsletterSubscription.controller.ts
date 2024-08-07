import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewsletterSubscriptionService } from "./newsletterSubscription.service";
import { NewsletterSubscriptionControllerBase } from "./base/newsletterSubscription.controller.base";

@swagger.ApiTags("newsletterSubscriptions")
@common.Controller("newsletterSubscriptions")
export class NewsletterSubscriptionController extends NewsletterSubscriptionControllerBase {
  constructor(protected readonly service: NewsletterSubscriptionService) {
    super(service);
  }
}
