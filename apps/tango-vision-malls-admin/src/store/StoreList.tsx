import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Stores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="category" source="category" />
        <TextField label="contactNumber" source="contactNumber" />
        <TextField label="contactPerson" source="contactPerson" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="name" source="name" />
        <TextField label="openingHours" source="openingHours" />
        <TextField label="socialMediaLinks" source="socialMediaLinks" />
        <TextField label="storeID" source="storeId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="website" source="website" />
      </Datagrid>
    </List>
  );
};
