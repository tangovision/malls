import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StoreTitle } from "../store/StoreTitle";
import { VisitorTitle } from "../visitor/VisitorTitle";

export const StoreReviewsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="reviewID" source="reviewId" />
        <ReferenceInput source="store.id" reference="Store" label="store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <ReferenceInput source="visitor.id" reference="Visitor" label="visitor">
          <SelectInput optionText={VisitorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
