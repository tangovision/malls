import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AdvertisementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adID" source="adId" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="placement" source="placement" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="targetAudience" multiline source="targetAudience" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
