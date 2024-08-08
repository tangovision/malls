export type Asset = {
  assignedTo: string | null;
  category: string | null;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  purchaseDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  warrantyExpirationDate: Date | null;
};
