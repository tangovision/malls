import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const ServiceLevelAgreementCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="Penalties" multiline source="penalties" />
        <SelectInput
          source="priority"
          label="Priority"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="ResolutionTime" source="resolutionTime" />
        <NumberInput step={1} label="ResponseTime" source="responseTime" />
      </SimpleForm>
    </Create>
  );
};
