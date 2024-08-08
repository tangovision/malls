import * as graphql from "@nestjs/graphql";
import { SupportStaffResolverBase } from "./base/supportStaff.resolver.base";
import { SupportStaff } from "./base/SupportStaff";
import { SupportStaffService } from "./supportStaff.service";

@graphql.Resolver(() => SupportStaff)
export class SupportStaffResolver extends SupportStaffResolverBase {
  constructor(protected readonly service: SupportStaffService) {
    super(service);
  }
}
