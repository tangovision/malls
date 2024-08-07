/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Promotion as PrismaPromotion } from "@prisma/client";

export class PromotionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PromotionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.promotion.count(args);
  }

  async promotions(
    args: Prisma.PromotionFindManyArgs
  ): Promise<PrismaPromotion[]> {
    return this.prisma.promotion.findMany(args);
  }
  async promotion(
    args: Prisma.PromotionFindUniqueArgs
  ): Promise<PrismaPromotion | null> {
    return this.prisma.promotion.findUnique(args);
  }
  async createPromotion(
    args: Prisma.PromotionCreateArgs
  ): Promise<PrismaPromotion> {
    return this.prisma.promotion.create(args);
  }
  async updatePromotion(
    args: Prisma.PromotionUpdateArgs
  ): Promise<PrismaPromotion> {
    return this.prisma.promotion.update(args);
  }
  async deletePromotion(
    args: Prisma.PromotionDeleteArgs
  ): Promise<PrismaPromotion> {
    return this.prisma.promotion.delete(args);
  }
}