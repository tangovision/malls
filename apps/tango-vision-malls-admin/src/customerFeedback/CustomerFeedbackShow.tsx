import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CustomerFeedbackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
