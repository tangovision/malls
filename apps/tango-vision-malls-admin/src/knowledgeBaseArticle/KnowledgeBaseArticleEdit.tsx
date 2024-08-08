import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const KnowledgeBaseArticleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="CategoryID" source="categoryId" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="CreationDate" source="creationDate" />
        <DateTimeInput label="LastUpdatedDate" source="lastUpdatedDate" />
        <TextInput label="Tags" multiline source="tags" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
