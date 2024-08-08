import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceLevelAgreementService } from "./serviceLevelAgreement.service";
import { ServiceLevelAgreementControllerBase } from "./base/serviceLevelAgreement.controller.base";

@swagger.ApiTags("serviceLevelAgreements")
@common.Controller("serviceLevelAgreements")
export class ServiceLevelAgreementController extends ServiceLevelAgreementControllerBase {
  constructor(protected readonly service: ServiceLevelAgreementService) {
    super(service);
  }
}
