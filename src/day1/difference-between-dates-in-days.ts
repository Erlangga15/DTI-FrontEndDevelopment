export const differenceBetweenDatesInDays = (date1: Date, date2: Date): number => {
  return Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
};
