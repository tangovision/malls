import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { VISITOR_TITLE_FIELD } from "./VisitorTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const VisitorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="feedback" source="feedback" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phone" source="phone" />
        <TextField label="preferences" source="preferences" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="visitDate" source="visitDate" />
        <TextField label="visitorID" source="visitorId" />
        <ReferenceManyField
          reference="Feedback"
          target="visitorId"
          label="Feedbacks"
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
            <ReferenceField
              label="visitor"
              source="visitor.id"
              reference="Visitor"
            >
              <TextField source={VISITOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StoreReviews"
          target="visitorId"
          label="StoreReviewsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="rating" source="rating" />
            <TextField label="reviewID" source="reviewId" />
            <ReferenceField label="store" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="visitor"
              source="visitor.id"
              reference="Visitor"
            >
              <TextField source={VISITOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
