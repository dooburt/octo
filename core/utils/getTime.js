import zPad from "./zPad";

/**
 * Create a Time only timestamp string with the format:
 * [Hour]:[Minutes]:[Seconds]
 * @param  {Date} date The time to be used
 * @return {string}
 */
const getTime = (date = new Date()) => {
  return `${zPad(date.getHours())}${zPad(date.getMinutes() + 1)}${zPad(date.getSeconds())}`;
};

export default getTime;
