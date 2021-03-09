import dayjs from 'dayjs';

export default function useUtils() {
  const formatDate = (date: Date) => {
    return dayjs(date).format('MMMM DD, YYYY');
  };

  const timeConvert = (n: number): string => {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);

    return rhours + 'h' + rminutes;
  };

  return {
    formatDate,
    timeConvert,
  };
}
