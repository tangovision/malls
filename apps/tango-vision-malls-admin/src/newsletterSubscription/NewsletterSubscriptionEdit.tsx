import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const NewsletterSubscriptionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="subscriptionDate" source="subscriptionDate" />
        <TextInput label="subscriptionID" source="subscriptionId" />
      </SimpleForm>
    </Edit>
  );
};
