import { IssueCategory as TIssueCategory } from "../api/issueCategory/IssueCategory";

export const ISSUECATEGORY_TITLE_FIELD = "name";

export const IssueCategoryTitle = (record: TIssueCategory): string => {
  return record.name?.toString() || String(record.id);
};
