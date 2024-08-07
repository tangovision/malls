import { Module } from "@nestjs/common";
import { LoyaltyProgramModuleBase } from "./base/loyaltyProgram.module.base";
import { LoyaltyProgramService } from "./loyaltyProgram.service";
import { LoyaltyProgramController } from "./loyaltyProgram.controller";
import { LoyaltyProgramResolver } from "./loyaltyProgram.resolver";

@Module({
  imports: [LoyaltyProgramModuleBase],
  controllers: [LoyaltyProgramController],
  providers: [LoyaltyProgramService, LoyaltyProgramResolver],
  exports: [LoyaltyProgramService],
})
export class LoyaltyProgramModule {}
