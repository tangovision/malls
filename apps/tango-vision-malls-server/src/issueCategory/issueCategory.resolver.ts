import * as graphql from "@nestjs/graphql";
import { IssueCategoryResolverBase } from "./base/issueCategory.resolver.base";
import { IssueCategory } from "./base/IssueCategory";
import { IssueCategoryService } from "./issueCategory.service";

@graphql.Resolver(() => IssueCategory)
export class IssueCategoryResolver extends IssueCategoryResolverBase {
  constructor(protected readonly service: IssueCategoryService) {
    super(service);
  }
}
