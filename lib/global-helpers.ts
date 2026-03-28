export const isValidArray = <T>(
  arr: readonly T[] | null | undefined
): arr is readonly T[] => {
  return Array.isArray(arr) && arr.length > 0;
};

export const isValidString = (value: unknown): value is string => {
  return typeof value === "string" && value.trim().length > 0;
};

export const truncateText = (text: string, length = 100): string => {
  return text.length > length ? `${text.slice(0, length)}...` : text;
};

export const capitalizeFirstLetter = (text: string): string => {
  if (text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const isBrowser = (): boolean => {
  return typeof window !== "undefined";
};
