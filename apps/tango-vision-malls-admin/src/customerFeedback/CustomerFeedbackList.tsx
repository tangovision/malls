import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerFeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CustomerFeedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
