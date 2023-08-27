import moment from "moment";

export const FormatDate = (date: string | Date) => {
  if (!date) return "-";
  return moment(new Date(date)).format("DD/MM/YYYY");
};

export function convertBytes(size: number) {
  const units = ["bytes", "kb", "mb", "gb"];
  let index = 0;
  while (size >= 1024 && index < 3) {
    size /= 1024;
    index++;
  }

  return `${size.toFixed(2)} ${units[index]}`;
}
