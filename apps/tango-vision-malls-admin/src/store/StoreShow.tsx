import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STORE_TITLE_FIELD } from "./StoreTitle";
import { VISITOR_TITLE_FIELD } from "../visitor/VisitorTitle";

export const StoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="category" source="category" />
        <TextField label="contactNumber" source="contactNumber" />
        <TextField label="contactPerson" source="contactPerson" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="name" source="name" />
        <TextField label="openingHours" source="openingHours" />
        <TextField label="socialMediaLinks" source="socialMediaLinks" />
        <TextField label="storeID" source="storeId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="website" source="website" />
        <ReferenceManyField
          reference="StoreReviews"
          target="storeId"
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
