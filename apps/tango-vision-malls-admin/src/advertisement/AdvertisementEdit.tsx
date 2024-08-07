import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AdvertisementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="adID" source="adId" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="placement" source="placement" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="targetAudience" multiline source="targetAudience" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
