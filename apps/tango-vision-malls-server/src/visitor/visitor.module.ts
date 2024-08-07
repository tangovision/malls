import { Module } from "@nestjs/common";
import { VisitorModuleBase } from "./base/visitor.module.base";
import { VisitorService } from "./visitor.service";
import { VisitorController } from "./visitor.controller";
import { VisitorResolver } from "./visitor.resolver";

@Module({
  imports: [VisitorModuleBase],
  controllers: [VisitorController],
  providers: [VisitorService, VisitorResolver],
  exports: [VisitorService],
})
export class VisitorModule {}
