import * as graphql from "@nestjs/graphql";
import { VisitorResolverBase } from "./base/visitor.resolver.base";
import { Visitor } from "./base/Visitor";
import { VisitorService } from "./visitor.service";

@graphql.Resolver(() => Visitor)
export class VisitorResolver extends VisitorResolverBase {
  constructor(protected readonly service: VisitorService) {
    super(service);
  }
}
