/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Mall as PrismaMall } from "@prisma/client";

export class MallServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MallCountArgs, "select">): Promise<number> {
    return this.prisma.mall.count(args);
  }

  async malls(args: Prisma.MallFindManyArgs): Promise<PrismaMall[]> {
    return this.prisma.mall.findMany(args);
  }
  async mall(args: Prisma.MallFindUniqueArgs): Promise<PrismaMall | null> {
    return this.prisma.mall.findUnique(args);
  }
  async createMall(args: Prisma.MallCreateArgs): Promise<PrismaMall> {
    return this.prisma.mall.create(args);
  }
  async updateMall(args: Prisma.MallUpdateArgs): Promise<PrismaMall> {
    return this.prisma.mall.update(args);
  }
  async deleteMall(args: Prisma.MallDeleteArgs): Promise<PrismaMall> {
    return this.prisma.mall.delete(args);
  }
}