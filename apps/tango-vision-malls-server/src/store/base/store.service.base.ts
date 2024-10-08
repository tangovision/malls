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
  Store as PrismaStore,
  StoreReviews as PrismaStoreReviews,
} from "@prisma/client";

export class StoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StoreCountArgs, "select">): Promise<number> {
    return this.prisma.store.count(args);
  }

  async stores(args: Prisma.StoreFindManyArgs): Promise<PrismaStore[]> {
    return this.prisma.store.findMany(args);
  }
  async store(args: Prisma.StoreFindUniqueArgs): Promise<PrismaStore | null> {
    return this.prisma.store.findUnique(args);
  }
  async createStore(args: Prisma.StoreCreateArgs): Promise<PrismaStore> {
    return this.prisma.store.create(args);
  }
  async updateStore(args: Prisma.StoreUpdateArgs): Promise<PrismaStore> {
    return this.prisma.store.update(args);
  }
  async deleteStore(args: Prisma.StoreDeleteArgs): Promise<PrismaStore> {
    return this.prisma.store.delete(args);
  }

  async findStoreReviewsItems(
    parentId: string,
    args: Prisma.StoreReviewsFindManyArgs
  ): Promise<PrismaStoreReviews[]> {
    return this.prisma.store
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .storeReviewsItems(args);
  }
}
