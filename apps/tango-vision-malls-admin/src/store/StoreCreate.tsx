import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StoreReviewsTitle } from "../storeReviews/StoreReviewsTitle";

export const StoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="contactPerson" source="contactPerson" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <TextInput label="openingHours" source="openingHours" />
        <TextInput
          label="socialMediaLinks"
          multiline
          source="socialMediaLinks"
        />
        <TextInput label="storeID" source="storeId" />
        <ReferenceArrayInput
          source="storeReviewsItems"
          reference="StoreReviews"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StoreReviewsTitle} />
        </ReferenceArrayInput>
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Create>
  );
};
