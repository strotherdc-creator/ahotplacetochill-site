import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ZENOTI_BOOKING_URL =
  "https://ahotplacetochill.zenoti.com/webstoreNew/services";

export const ZENOTI_MEMBERSHIP_URL =
  "https://ahotplacetochill.zenoti.com/webstoreNew/memberships";

export const APP_STORE_URL = "#"; // Update when published
export const GOOGLE_PLAY_URL = "#"; // Update when published

export const HOURS = [
  { day: "Monday", hours: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
  { day: "Friday", hours: "9:00 AM – 4:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 3:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 2:00 PM" },
];

export function getTodayHours(): { day: string; hours: string; isOpen: boolean } | null {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[new Date().getDay()];
  const entry = HOURS.find((h) => h.day === today);
  if (!entry) return null;
  return { ...entry, isOpen: true };
}
