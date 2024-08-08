import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ServiceLevelAgreementWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  penalties?: StringNullableFilter;
  priority?: "Option1";
  resolutionTime?: IntNullableFilter;
  responseTime?: IntNullableFilter;
};
