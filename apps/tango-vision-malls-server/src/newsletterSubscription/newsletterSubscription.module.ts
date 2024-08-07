import { Module } from "@nestjs/common";
import { NewsletterSubscriptionModuleBase } from "./base/newsletterSubscription.module.base";
import { NewsletterSubscriptionService } from "./newsletterSubscription.service";
import { NewsletterSubscriptionController } from "./newsletterSubscription.controller";
import { NewsletterSubscriptionResolver } from "./newsletterSubscription.resolver";

@Module({
  imports: [NewsletterSubscriptionModuleBase],
  controllers: [NewsletterSubscriptionController],
  providers: [NewsletterSubscriptionService, NewsletterSubscriptionResolver],
  exports: [NewsletterSubscriptionService],
})
export class NewsletterSubscriptionModule {}
