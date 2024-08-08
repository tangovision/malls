import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { VISITOR_TITLE_FIELD } from "../visitor/VisitorTitle";

export const TicketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AssignedTo" source="assignedTo" />
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreationDate" source="creationDate" />
        <TextField label="Description" source="description" />
        <TextField label="DueDate" source="dueDate" />
        <TextField label="ID" source="id" />
        <TextField label="Priority" source="priority" />
        <TextField label="Resolution" source="resolution" />
        <TextField label="ResolutionDate" source="resolutionDate" />
        <TextField label="Status" source="status" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Visitor" source="visitor.id" reference="Visitor">
          <TextField source={VISITOR_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
