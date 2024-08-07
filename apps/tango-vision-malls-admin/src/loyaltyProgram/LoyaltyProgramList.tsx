import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LoyaltyProgramList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LoyaltyPrograms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="loyaltyProgramID" source="loyaltyProgramId" />
        <TextField label="name" source="name" />
        <TextField label="participants" source="participants" />
        <TextField label="pointsEarned" source="pointsEarned" />
        <TextField label="rewards" source="rewards" />
        <TextField label="startDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
