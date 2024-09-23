export interface DateDifference {
  date1: Date;
  date2: Date;
}

export const differenceBetweenDatesInDays = ({ date1, date2 }: DateDifference): number => {
  return Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
};
