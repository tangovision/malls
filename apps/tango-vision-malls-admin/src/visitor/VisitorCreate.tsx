import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { FeedbackTitle } from "../feedback/FeedbackTitle";
import { StoreReviewsTitle } from "../storeReviews/StoreReviewsTitle";

export const VisitorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="feedback" multiline source="feedback" />
        <ReferenceArrayInput
          source="feedbacks"
          reference="Feedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeedbackTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="preferences" multiline source="preferences" />
        <ReferenceArrayInput
          source="storeReviewsItems"
          reference="StoreReviews"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StoreReviewsTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="visitDate" source="visitDate" />
        <TextInput label="visitorID" source="visitorId" />
      </SimpleForm>
    </Create>
  );
};
