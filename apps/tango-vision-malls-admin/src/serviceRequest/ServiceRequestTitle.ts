import { ServiceRequest as TServiceRequest } from "../api/serviceRequest/ServiceRequest";

export const SERVICEREQUEST_TITLE_FIELD = "assignedTo";

export const ServiceRequestTitle = (record: TServiceRequest): string => {
  return record.assignedTo?.toString() || String(record.id);
};
