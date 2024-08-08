import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SupportStaffServiceBase } from "./base/supportStaff.service.base";

@Injectable()
export class SupportStaffService extends SupportStaffServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
