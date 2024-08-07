import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VISITOR_TITLE_FIELD } from "../visitor/VisitorTitle";

export const FeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Feedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
