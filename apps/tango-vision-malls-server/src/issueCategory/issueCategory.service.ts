import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IssueCategoryServiceBase } from "./base/issueCategory.service.base";

@Injectable()
export class IssueCategoryService extends IssueCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
