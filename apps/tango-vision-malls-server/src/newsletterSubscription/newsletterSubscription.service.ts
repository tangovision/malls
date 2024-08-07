import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewsletterSubscriptionServiceBase } from "./base/newsletterSubscription.service.base";

@Injectable()
export class NewsletterSubscriptionService extends NewsletterSubscriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
