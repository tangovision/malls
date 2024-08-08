export type ServiceRequest = {
  assignedTo: string | null;
  completionDate: Date | null;
  createdAt: Date;
  creationDate: Date | null;
  description: string | null;
  id: string;
  requestType: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
