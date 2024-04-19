export function getCurrentDateTime() {
  // Create a new Date object
  const currentDate = new Date();

  // Get the current date
  const date = currentDate.getDate();

  // Get the current month
  // Note: Month starts from 0 (January) to 11 (December)
  const month = currentDate.getMonth() + 1;

  // Get the current year
  const year = currentDate.getFullYear();

  // Get the current hour
  const hour = currentDate.getHours();

  // Get the current minute
  const minute = currentDate.getMinutes();

  // Get the current second
  const second = currentDate.getSeconds();

  // Format date and time
  const formattedDate =
    (date < 10 ? "0" : "") +
    date +
    "/" +
    (month < 10 ? "0" : "") +
    month +
    "/" +
    year;
  const formattedTime =
    (hour < 10 ? "0" : "") +
    hour +
    "/" +
    (minute < 10 ? "0" : "") +
    minute +
    "/" +
    (second < 10 ? "0" : "") +
    second;

  // Return the current date and time as a string
  return `_date_${formattedDate}_time_${formattedTime}`;
}


