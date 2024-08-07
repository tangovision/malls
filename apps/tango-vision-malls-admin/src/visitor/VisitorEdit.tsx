import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { FeedbackTitle } from "../feedback/FeedbackTitle";
import { StoreReviewsTitle } from "../storeReviews/StoreReviewsTitle";

export const VisitorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
