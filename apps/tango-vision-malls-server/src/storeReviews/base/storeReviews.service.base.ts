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
  StoreReviews as PrismaStoreReviews,
  Store as PrismaStore,
  Visitor as PrismaVisitor,
} from "@prisma/client";

export class StoreReviewsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.StoreReviewsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.storeReviews.count(args);
  }

  async storeReviewsItems(
    args: Prisma.StoreReviewsFindManyArgs
  ): Promise<PrismaStoreReviews[]> {
    return this.prisma.storeReviews.findMany(args);
  }
  async storeReviews(
    args: Prisma.StoreReviewsFindUniqueArgs
  ): Promise<PrismaStoreReviews | null> {
    return this.prisma.storeReviews.findUnique(args);
  }
  async createStoreReviews(
    args: Prisma.StoreReviewsCreateArgs
  ): Promise<PrismaStoreReviews> {
    return this.prisma.storeReviews.create(args);
  }
  async updateStoreReviews(
    args: Prisma.StoreReviewsUpdateArgs
  ): Promise<PrismaStoreReviews> {
    return this.prisma.storeReviews.update(args);
  }
  async deleteStoreReviews(
    args: Prisma.StoreReviewsDeleteArgs
  ): Promise<PrismaStoreReviews> {
    return this.prisma.storeReviews.delete(args);
  }

  async getStore(parentId: string): Promise<PrismaStore | null> {
    return this.prisma.storeReviews
      .findUnique({
        where: { id: parentId },
      })
      .store();
  }

  async getVisitor(parentId: string): Promise<PrismaVisitor | null> {
    return this.prisma.storeReviews
      .findUnique({
        where: { id: parentId },
      })
      .visitor();
  }
}