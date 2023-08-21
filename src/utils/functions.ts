export function getStartOfDay(date: string | Date): Date {
    if (typeof date === "string") date = new Date(date);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  }
  
export function getEndOfDay(date: string | Date): Date {
    if (typeof date === "string") date = new Date(date);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
  }