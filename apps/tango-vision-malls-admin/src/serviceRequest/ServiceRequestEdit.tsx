import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const ServiceRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AssignedTo" source="assignedTo" />
        <DateTimeInput label="CompletionDate" source="completionDate" />
        <DateTimeInput label="CreationDate" source="creationDate" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="RequestType" source="requestType" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
