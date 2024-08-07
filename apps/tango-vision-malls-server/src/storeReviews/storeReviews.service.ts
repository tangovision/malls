import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoreReviewsServiceBase } from "./base/storeReviews.service.base";

@Injectable()
export class StoreReviewsService extends StoreReviewsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
