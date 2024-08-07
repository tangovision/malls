import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StoreReviewsTitle } from "../storeReviews/StoreReviewsTitle";

export const StoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
