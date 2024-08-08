import * as graphql from "@nestjs/graphql";
import { CustomerFeedbackResolverBase } from "./base/customerFeedback.resolver.base";
import { CustomerFeedback } from "./base/CustomerFeedback";
import { CustomerFeedbackService } from "./customerFeedback.service";

@graphql.Resolver(() => CustomerFeedback)
export class CustomerFeedbackResolver extends CustomerFeedbackResolverBase {
  constructor(protected readonly service: CustomerFeedbackService) {
    super(service);
  }
}
