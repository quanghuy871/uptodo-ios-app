export default function timeConverter() {
  const dateTime = new Date();
  const date = dateTime.getDate();
  const month = dateTime.getMonth();
  const year = dateTime.getFullYear();
  const th = dateTime.getDay();
  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]

  return `${days[th]}, ${date}/${month + 1}/${year}`
}