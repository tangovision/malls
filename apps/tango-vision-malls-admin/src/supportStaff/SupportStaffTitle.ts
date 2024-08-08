import { SupportStaff as TSupportStaff } from "../api/supportStaff/SupportStaff";

export const SUPPORTSTAFF_TITLE_FIELD = "id";

export const SupportStaffTitle = (record: TSupportStaff): string => {
  return record.id?.toString() || String(record.id);
};
