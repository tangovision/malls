export type ServiceLevelAgreement = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  penalties: string | null;
  priority?: "Option1" | null;
  resolutionTime: number | null;
  responseTime: number | null;
  updatedAt: Date;
};
