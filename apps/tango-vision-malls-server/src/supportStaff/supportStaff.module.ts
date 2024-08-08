import { Module } from "@nestjs/common";
import { SupportStaffModuleBase } from "./base/supportStaff.module.base";
import { SupportStaffService } from "./supportStaff.service";
import { SupportStaffController } from "./supportStaff.controller";
import { SupportStaffResolver } from "./supportStaff.resolver";

@Module({
  imports: [SupportStaffModuleBase],
  controllers: [SupportStaffController],
  providers: [SupportStaffService, SupportStaffResolver],
  exports: [SupportStaffService],
})
export class SupportStaffModule {}
