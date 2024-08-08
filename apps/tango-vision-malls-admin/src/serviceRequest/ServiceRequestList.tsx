import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ServiceRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ServiceRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AssignedTo" source="assignedTo" />
        <TextField label="CompletionDate" source="completionDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreationDate" source="creationDate" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="RequestType" source="requestType" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
