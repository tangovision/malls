/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, IssueCategory as PrismaIssueCategory } from "@prisma/client";

export class IssueCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.IssueCategoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.issueCategory.count(args);
  }

  async issueCategories(
    args: Prisma.IssueCategoryFindManyArgs
  ): Promise<PrismaIssueCategory[]> {
    return this.prisma.issueCategory.findMany(args);
  }
  async issueCategory(
    args: Prisma.IssueCategoryFindUniqueArgs
  ): Promise<PrismaIssueCategory | null> {
    return this.prisma.issueCategory.findUnique(args);
  }
  async createIssueCategory(
    args: Prisma.IssueCategoryCreateArgs
  ): Promise<PrismaIssueCategory> {
    return this.prisma.issueCategory.create(args);
  }
  async updateIssueCategory(
    args: Prisma.IssueCategoryUpdateArgs
  ): Promise<PrismaIssueCategory> {
    return this.prisma.issueCategory.update(args);
  }
  async deleteIssueCategory(
    args: Prisma.IssueCategoryDeleteArgs
  ): Promise<PrismaIssueCategory> {
    return this.prisma.issueCategory.delete(args);
  }
}
