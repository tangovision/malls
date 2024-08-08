import { Module } from "@nestjs/common";
import { IssueCategoryModuleBase } from "./base/issueCategory.module.base";
import { IssueCategoryService } from "./issueCategory.service";
import { IssueCategoryController } from "./issueCategory.controller";
import { IssueCategoryResolver } from "./issueCategory.resolver";

@Module({
  imports: [IssueCategoryModuleBase],
  controllers: [IssueCategoryController],
  providers: [IssueCategoryService, IssueCategoryResolver],
  exports: [IssueCategoryService],
})
export class IssueCategoryModule {}
