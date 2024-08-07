export type LoyaltyProgram = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  loyaltyProgramId: string | null;
  name: string | null;
  participants: string | null;
  pointsEarned: number | null;
  rewards: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
