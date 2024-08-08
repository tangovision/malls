import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const KnowledgeBaseArticleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="CategoryID" source="categoryId" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="CreationDate" source="creationDate" />
        <DateTimeInput label="LastUpdatedDate" source="lastUpdatedDate" />
        <TextInput label="Tags" multiline source="tags" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
