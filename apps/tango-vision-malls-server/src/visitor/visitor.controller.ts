import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VisitorService } from "./visitor.service";
import { VisitorControllerBase } from "./base/visitor.controller.base";

@swagger.ApiTags("visitors")
@common.Controller("visitors")
export class VisitorController extends VisitorControllerBase {
  constructor(protected readonly service: VisitorService) {
    super(service);
  }
}
