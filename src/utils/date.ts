export const createDate = (stringDate: string): Date => {
  if (stringDate.length > 13) {
    return stringDate as unknown as Date;
  }
  const [year, month, day] = stringDate.split("-");

  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return date;
};
