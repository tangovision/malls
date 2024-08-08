import * as graphql from "@nestjs/graphql";
import { ServiceLevelAgreementResolverBase } from "./base/serviceLevelAgreement.resolver.base";
import { ServiceLevelAgreement } from "./base/ServiceLevelAgreement";
import { ServiceLevelAgreementService } from "./serviceLevelAgreement.service";

@graphql.Resolver(() => ServiceLevelAgreement)
export class ServiceLevelAgreementResolver extends ServiceLevelAgreementResolverBase {
  constructor(protected readonly service: ServiceLevelAgreementService) {
    super(service);
  }
}
