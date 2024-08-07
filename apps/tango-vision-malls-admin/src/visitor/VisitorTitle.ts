import { Visitor as TVisitor } from "../api/visitor/Visitor";

export const VISITOR_TITLE_FIELD = "name";

export const VisitorTitle = (record: TVisitor): string => {
  return record.name?.toString() || String(record.id);
};
