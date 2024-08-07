import { Advertisement as TAdvertisement } from "../api/advertisement/Advertisement";

export const ADVERTISEMENT_TITLE_FIELD = "title";

export const AdvertisementTitle = (record: TAdvertisement): string => {
  return record.title?.toString() || String(record.id);
};
