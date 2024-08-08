import { Module } from "@nestjs/common";
import { ServiceLevelAgreementModuleBase } from "./base/serviceLevelAgreement.module.base";
import { ServiceLevelAgreementService } from "./serviceLevelAgreement.service";
import { ServiceLevelAgreementController } from "./serviceLevelAgreement.controller";
import { ServiceLevelAgreementResolver } from "./serviceLevelAgreement.resolver";

@Module({
  imports: [ServiceLevelAgreementModuleBase],
  controllers: [ServiceLevelAgreementController],
  providers: [ServiceLevelAgreementService, ServiceLevelAgreementResolver],
  exports: [ServiceLevelAgreementService],
})
export class ServiceLevelAgreementModule {}
