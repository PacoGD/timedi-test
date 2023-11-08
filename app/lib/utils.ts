import { formatDistanceToNow } from "date-fns";

export function formatDistanceToNowfromDate(date: string) {
  return formatDistanceToNow(new Date(date));
}
