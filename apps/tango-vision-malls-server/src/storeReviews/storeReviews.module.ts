import { Module } from "@nestjs/common";
import { StoreReviewsModuleBase } from "./base/storeReviews.module.base";
import { StoreReviewsService } from "./storeReviews.service";
import { StoreReviewsController } from "./storeReviews.controller";
import { StoreReviewsResolver } from "./storeReviews.resolver";

@Module({
  imports: [StoreReviewsModuleBase],
  controllers: [StoreReviewsController],
  providers: [StoreReviewsService, StoreReviewsResolver],
  exports: [StoreReviewsService],
})
export class StoreReviewsModule {}
