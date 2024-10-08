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
  Space as PrismaSpace,
  LeaseAgreement as PrismaLeaseAgreement,
  MaintenanceRequest as PrismaMaintenanceRequest,
} from "@prisma/client";

export class SpaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SpaceCountArgs, "select">): Promise<number> {
    return this.prisma.space.count(args);
  }

  async spaces(args: Prisma.SpaceFindManyArgs): Promise<PrismaSpace[]> {
    return this.prisma.space.findMany(args);
  }
  async space(args: Prisma.SpaceFindUniqueArgs): Promise<PrismaSpace | null> {
    return this.prisma.space.findUnique(args);
  }
  async createSpace(args: Prisma.SpaceCreateArgs): Promise<PrismaSpace> {
    return this.prisma.space.create(args);
  }
  async updateSpace(args: Prisma.SpaceUpdateArgs): Promise<PrismaSpace> {
    return this.prisma.space.update(args);
  }
  async deleteSpace(args: Prisma.SpaceDeleteArgs): Promise<PrismaSpace> {
    return this.prisma.space.delete(args);
  }

  async findLeaseAgreements(
    parentId: string,
    args: Prisma.LeaseAgreementFindManyArgs
  ): Promise<PrismaLeaseAgreement[]> {
    return this.prisma.space
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .leaseAgreements(args);
  }

  async findMaintenanceRequests(
    parentId: string,
    args: Prisma.MaintenanceRequestFindManyArgs
  ): Promise<PrismaMaintenanceRequest[]> {
    return this.prisma.space
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .maintenanceRequests(args);
  }
}
