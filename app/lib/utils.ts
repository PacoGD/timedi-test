import { formatDistanceToNow } from "date-fns";
import { Repository } from "./definitions";

export function formatDistanceToNowfromDate(date: string) {
  return formatDistanceToNow(new Date(date));
}

export const paginate = (
  items: Repository[],
  currentPage: number,
  itemsPerPage: number
) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};
