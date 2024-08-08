import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const AssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
