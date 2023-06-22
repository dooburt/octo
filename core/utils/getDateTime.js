import zPad from "./zPad";
import getTime from "./getTime";

/**
 * Create a complete Date / Time timestamp string with the format:
 * [Year]-[Month]-[Date]_[Hour]:[Minutes]:[Seconds]
 * @param  {Date} date The date and time to be used
 * @return {string}
 */
const getDateTime = (date = new Date()) => {
  return `${date.getFullYear()}-${zPad(date.getMonth() + 1)}-${zPad(date.getDate())}_${getTime(date)}`;
};

export default getDateTime;
