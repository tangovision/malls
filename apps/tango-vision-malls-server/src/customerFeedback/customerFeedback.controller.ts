import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerFeedbackService } from "./customerFeedback.service";
import { CustomerFeedbackControllerBase } from "./base/customerFeedback.controller.base";

@swagger.ApiTags("customerFeedbacks")
@common.Controller("customerFeedbacks")
export class CustomerFeedbackController extends CustomerFeedbackControllerBase {
  constructor(protected readonly service: CustomerFeedbackService) {
    super(service);
  }
}
