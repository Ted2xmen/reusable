import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const formatDate = (date: any, type?: string) => {
  if (type === "relative") {
    return dayjs(date).fromNow();
  }
  return dayjs(date).format(type || "DD MMMM YYYY");
};

const isDateWithinLast3Days = (date: any) => {
  const parsedDate = dayjs(date);
  const now = dayjs();
  const daysDifference = now.diff(parsedDate, "day");

  return daysDifference <= 3;
};

export default isDateWithinLast3Days;

export const getReadTime = (content: string | null, wpm = 265): number => {
  if (!content) {
    return 0;
  }

  return Math.ceil(content.trim().split(/\s+/).length / wpm);
};

export const calculateDate = () => {
  const currentDate = new Date();
  const sevenDaysAgo = new Date(
    currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  );
  return sevenDaysAgo.toISOString().split("T")[0];
};
