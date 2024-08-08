import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ContactLogTitle } from "../contactLog/ContactLogTitle";
import { LeaseAgreementTitle } from "../leaseAgreement/LeaseAgreementTitle";
import { MaintenanceRequestTitle } from "../maintenanceRequest/MaintenanceRequestTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { TicketTitle } from "../ticket/TicketTitle";

export const TenantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="BusinessType" source="businessType" />
        <ReferenceArrayInput
          source="contactLogs"
          reference="ContactLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactLogTitle} />
        </ReferenceArrayInput>
        <TextInput label="ContactNumber" source="contactNumber" />
        <TextInput label="ContactPerson" source="contactPerson" />
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="leaseAgreements"
          reference="LeaseAgreement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaseAgreementTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="maintenanceRequests"
          reference="MaintenanceRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceRequestTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="MoveInDate" source="moveInDate" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="TenantID" source="tenantId" />
        <ReferenceArrayInput
          source="tickets"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
