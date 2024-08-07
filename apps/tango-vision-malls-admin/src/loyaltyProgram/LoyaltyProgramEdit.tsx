import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const LoyaltyProgramEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="loyaltyProgramID" source="loyaltyProgramId" />
        <TextInput label="name" source="name" />
        <TextInput label="participants" multiline source="participants" />
        <NumberInput step={1} label="pointsEarned" source="pointsEarned" />
        <TextInput label="rewards" multiline source="rewards" />
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
