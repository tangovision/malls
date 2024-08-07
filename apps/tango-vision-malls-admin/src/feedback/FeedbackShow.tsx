import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { VISITOR_TITLE_FIELD } from "../visitor/VisitorTitle";

export const FeedbackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="feedbackID" source="feedbackId" />
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <TextField label="responseStatus" source="responseStatus" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="visitor" source="visitor.id" reference="Visitor">
          <TextField source={VISITOR_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
