import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { VisitorTitle } from "../visitor/VisitorTitle";

export const TicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AssignedTo" source="assignedTo" />
        <TextInput label="Category" source="category" />
        <DateTimeInput label="CreationDate" source="creationDate" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="DueDate" source="dueDate" />
        <SelectInput
          source="priority"
          label="Priority"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Resolution" multiline source="resolution" />
        <DateTimeInput label="ResolutionDate" source="resolutionDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <ReferenceInput source="visitor.id" reference="Visitor" label="Visitor">
          <SelectInput optionText={VisitorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
