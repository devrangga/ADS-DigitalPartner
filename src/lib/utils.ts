import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractPhoneNumbers(numberType: string): string {
  const match = numberType.match(/\d+/);
  return match ? match[0] : "";
}
