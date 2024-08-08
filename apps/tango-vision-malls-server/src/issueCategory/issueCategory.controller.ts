import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IssueCategoryService } from "./issueCategory.service";
import { IssueCategoryControllerBase } from "./base/issueCategory.controller.base";

@swagger.ApiTags("issueCategories")
@common.Controller("issueCategories")
export class IssueCategoryController extends IssueCategoryControllerBase {
  constructor(protected readonly service: IssueCategoryService) {
    super(service);
  }
}
