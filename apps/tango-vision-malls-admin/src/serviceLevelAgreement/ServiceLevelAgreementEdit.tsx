import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const ServiceLevelAgreementEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
