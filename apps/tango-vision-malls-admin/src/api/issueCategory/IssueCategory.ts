export type IssueCategory = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  parentCategoryId: string | null;
  updatedAt: Date;
};
