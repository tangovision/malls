import * as graphql from "@nestjs/graphql";
import { StoreReviewsResolverBase } from "./base/storeReviews.resolver.base";
import { StoreReviews } from "./base/StoreReviews";
import { StoreReviewsService } from "./storeReviews.service";

@graphql.Resolver(() => StoreReviews)
export class StoreReviewsResolver extends StoreReviewsResolverBase {
  constructor(protected readonly service: StoreReviewsService) {
    super(service);
  }
}
