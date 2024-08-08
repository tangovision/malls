import { Module } from "@nestjs/common";
import { CustomerFeedbackModuleBase } from "./base/customerFeedback.module.base";
import { CustomerFeedbackService } from "./customerFeedback.service";
import { CustomerFeedbackController } from "./customerFeedback.controller";
import { CustomerFeedbackResolver } from "./customerFeedback.resolver";

@Module({
  imports: [CustomerFeedbackModuleBase],
  controllers: [CustomerFeedbackController],
  providers: [CustomerFeedbackService, CustomerFeedbackResolver],
  exports: [CustomerFeedbackService],
})
export class CustomerFeedbackModule {}
