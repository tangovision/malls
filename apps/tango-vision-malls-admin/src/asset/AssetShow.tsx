import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AssetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AssignedTo" source="assignedTo" />
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Name" source="name" />
        <TextField label="PurchaseDate" source="purchaseDate" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField
          label="WarrantyExpirationDate"
          source="warrantyExpirationDate"
        />
      </SimpleShowLayout>
    </Show>
  );
};
