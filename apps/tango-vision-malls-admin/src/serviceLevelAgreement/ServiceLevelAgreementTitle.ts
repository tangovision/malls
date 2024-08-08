import { ServiceLevelAgreement as TServiceLevelAgreement } from "../api/serviceLevelAgreement/ServiceLevelAgreement";

export const SERVICELEVELAGREEMENT_TITLE_FIELD = "name";

export const ServiceLevelAgreementTitle = (
  record: TServiceLevelAgreement
): string => {
  return record.name?.toString() || String(record.id);
};
