/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ServiceLevelAgreement as PrismaServiceLevelAgreement,
} from "@prisma/client";

export class ServiceLevelAgreementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ServiceLevelAgreementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.serviceLevelAgreement.count(args);
  }

  async serviceLevelAgreements(
    args: Prisma.ServiceLevelAgreementFindManyArgs
  ): Promise<PrismaServiceLevelAgreement[]> {
    return this.prisma.serviceLevelAgreement.findMany(args);
  }
  async serviceLevelAgreement(
    args: Prisma.ServiceLevelAgreementFindUniqueArgs
  ): Promise<PrismaServiceLevelAgreement | null> {
    return this.prisma.serviceLevelAgreement.findUnique(args);
  }
  async createServiceLevelAgreement(
    args: Prisma.ServiceLevelAgreementCreateArgs
  ): Promise<PrismaServiceLevelAgreement> {
    return this.prisma.serviceLevelAgreement.create(args);
  }
  async updateServiceLevelAgreement(
    args: Prisma.ServiceLevelAgreementUpdateArgs
  ): Promise<PrismaServiceLevelAgreement> {
    return this.prisma.serviceLevelAgreement.update(args);
  }
  async deleteServiceLevelAgreement(
    args: Prisma.ServiceLevelAgreementDeleteArgs
  ): Promise<PrismaServiceLevelAgreement> {
    return this.prisma.serviceLevelAgreement.delete(args);
  }
}
