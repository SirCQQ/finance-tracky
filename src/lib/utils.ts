import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateWithHours = (date: string | Date) => {
  return moment(date).format("DD-MM-YYYY h:mm:ss a");
};
export const formatDate = (date: string | Date) => {
  return moment(date).format("DD-MM-YYYY");
};
