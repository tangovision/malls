import { Tenant } from "../tenant/Tenant";
import { Visitor } from "../visitor/Visitor";

export type Ticket = {
  assignedTo: string | null;
  category: string | null;
  createdAt: Date;
  creationDate: Date | null;
  description: string | null;
  dueDate: Date | null;
  id: string;
  priority?: "Option1" | null;
  resolution: string | null;
  resolutionDate: Date | null;
  status?: "Option1" | null;
  tenant?: Tenant | null;
  title: string | null;
  updatedAt: Date;
  visitor?: Visitor | null;
};
