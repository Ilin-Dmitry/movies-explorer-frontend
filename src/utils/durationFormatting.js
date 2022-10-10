export default function durationFormatting (totalmins) {
  const hours = Math.floor(totalmins/60);
  const minutes = totalmins % 60;
  return (`${hours}ч ${minutes}м`);
}