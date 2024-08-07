import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PromotionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="discount" source="discount" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput
          label="participatingStores"
          multiline
          source="participatingStores"
        />
        <TextInput label="promotionID" source="promotionId" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
