import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CustomerFeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Comments" multiline source="comments" />
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
