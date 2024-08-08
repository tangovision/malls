import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupportStaffService } from "./supportStaff.service";
import { SupportStaffControllerBase } from "./base/supportStaff.controller.base";

@swagger.ApiTags("supportStaffs")
@common.Controller("supportStaffs")
export class SupportStaffController extends SupportStaffControllerBase {
  constructor(protected readonly service: SupportStaffService) {
    super(service);
  }
}
