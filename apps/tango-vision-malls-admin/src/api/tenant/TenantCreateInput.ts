import { ContactLogCreateNestedManyWithoutTenantsInput } from "./ContactLogCreateNestedManyWithoutTenantsInput";
import { LeaseAgreementCreateNestedManyWithoutTenantsInput } from "./LeaseAgreementCreateNestedManyWithoutTenantsInput";
import { MaintenanceRequestCreateNestedManyWithoutTenantsInput } from "./MaintenanceRequestCreateNestedManyWithoutTenantsInput";
import { PaymentCreateNestedManyWithoutTenantsInput } from "./PaymentCreateNestedManyWithoutTenantsInput";
import { TicketCreateNestedManyWithoutTenantsInput } from "./TicketCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  businessType?: string | null;
  contactLogs?: ContactLogCreateNestedManyWithoutTenantsInput;
  contactNumber?: string | null;
  contactPerson?: string | null;
  email?: string | null;
  leaseAgreements?: LeaseAgreementCreateNestedManyWithoutTenantsInput;
  maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutTenantsInput;
  moveInDate?: Date | null;
  name?: string | null;
  payments?: PaymentCreateNestedManyWithoutTenantsInput;
  status?: "Option1" | null;
  tenantId?: number | null;
  tickets?: TicketCreateNestedManyWithoutTenantsInput;
};
