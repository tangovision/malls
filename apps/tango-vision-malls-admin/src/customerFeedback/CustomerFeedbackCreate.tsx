import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CustomerFeedbackCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comments" multiline source="comments" />
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Rating" source="rating" />
      </SimpleForm>
    </Create>
  );
};
