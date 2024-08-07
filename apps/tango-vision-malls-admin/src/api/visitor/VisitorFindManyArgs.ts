import { VisitorWhereInput } from "./VisitorWhereInput";
import { VisitorOrderByInput } from "./VisitorOrderByInput";

export type VisitorFindManyArgs = {
  where?: VisitorWhereInput;
  orderBy?: Array<VisitorOrderByInput>;
  skip?: number;
  take?: number;
};
