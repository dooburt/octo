/**
 * Prepend '0' to, and return the last two characters of, given string
 * Meant for padding Date / Time strings
 * @param  {string} string String to pad
 * @return {string}
 */
const zPad = (string) => {
  return ("0" + string).slice(-2);
};

export default zPad;
