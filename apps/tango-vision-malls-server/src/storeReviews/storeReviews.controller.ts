import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StoreReviewsService } from "./storeReviews.service";
import { StoreReviewsControllerBase } from "./base/storeReviews.controller.base";

@swagger.ApiTags("storeReviews")
@common.Controller("storeReviews")
export class StoreReviewsController extends StoreReviewsControllerBase {
  constructor(protected readonly service: StoreReviewsService) {
    super(service);
  }
}
