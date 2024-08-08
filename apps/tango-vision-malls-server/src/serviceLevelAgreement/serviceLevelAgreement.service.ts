import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceLevelAgreementServiceBase } from "./base/serviceLevelAgreement.service.base";

@Injectable()
export class ServiceLevelAgreementService extends ServiceLevelAgreementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
