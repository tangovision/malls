import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AssignedTo" source="assignedTo" />
        <TextInput label="Category" source="category" />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="PurchaseDate" source="purchaseDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput
          label="WarrantyExpirationDate"
          source="warrantyExpirationDate"
        />
      </SimpleForm>
    </Create>
  );
};
