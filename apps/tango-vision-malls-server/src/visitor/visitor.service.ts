import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VisitorServiceBase } from "./base/visitor.service.base";

@Injectable()
export class VisitorService extends VisitorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
