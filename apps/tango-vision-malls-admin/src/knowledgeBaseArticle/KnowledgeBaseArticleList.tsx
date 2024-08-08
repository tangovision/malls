import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const KnowledgeBaseArticleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"KnowledgeBaseArticles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Author" source="author" />
        <TextField label="CategoryID" source="categoryId" />
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreationDate" source="creationDate" />
        <TextField label="ID" source="id" />
        <TextField label="LastUpdatedDate" source="lastUpdatedDate" />
        <TextField label="Tags" source="tags" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
