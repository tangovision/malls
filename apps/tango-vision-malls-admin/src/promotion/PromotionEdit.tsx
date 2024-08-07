import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PromotionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
