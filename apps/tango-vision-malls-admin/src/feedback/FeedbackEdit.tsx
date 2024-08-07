import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { VisitorTitle } from "../visitor/VisitorTitle";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="feedbackID" source="feedbackId" />
        <NumberInput step={1} label="rating" source="rating" />
        <SelectInput
          source="responseStatus"
          label="responseStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="visitor.id" reference="Visitor" label="visitor">
          <SelectInput optionText={VisitorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
