import { ServiceLevelAgreementWhereInput } from "./ServiceLevelAgreementWhereInput";
import { ServiceLevelAgreementOrderByInput } from "./ServiceLevelAgreementOrderByInput";

export type ServiceLevelAgreementFindManyArgs = {
  where?: ServiceLevelAgreementWhereInput;
  orderBy?: Array<ServiceLevelAgreementOrderByInput>;
  skip?: number;
  take?: number;
};
