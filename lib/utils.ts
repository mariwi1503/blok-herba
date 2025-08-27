import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toWaMeUrl(input: string) {
  let digits = String(input).replace(/\D+/g, "");

  if (digits.startsWith("0")) {
    digits = "62" + digits.slice(1);      // 0812... -> 62812...
  } else if (digits.startsWith("8")) {
    digits = "62" + digits;               // 812... -> 62812...
  } else if (digits.startsWith("62")) {
  } else {
    throw new Error("Format nomor tidak dikenali untuk Indonesia.");
  }

  // Opsional: validasi panjang dasar (biasanya 11–13 digit utk mobile ID)
  if (digits.length < 10 || digits.length > 15) {
    throw new Error("Panjang nomor tidak valid.");
  }

  return `https://wa.me/${digits}`;
}

export function formatCurrencyShort(value: number): string {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(1).replace(".0", "") + "M"
  }
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1).replace(".0", "") + "jt"
  }
  if (value >= 1_000) {
    return (value / 1_000).toFixed(1).replace(".0", "") + "rb"
  }
  return value.toString()
}
