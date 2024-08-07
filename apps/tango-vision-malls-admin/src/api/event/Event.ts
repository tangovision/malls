export type Event = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  eventId: string | null;
  id: string;
  location: string | null;
  name: string | null;
  organizer: string | null;
  participants: string | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
