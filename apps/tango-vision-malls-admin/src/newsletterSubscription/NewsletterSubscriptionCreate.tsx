import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const NewsletterSubscriptionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
