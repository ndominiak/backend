export const dateToISO = (value: string) => {
  return new Date(value.split("/").reverse().join("-"));
};
