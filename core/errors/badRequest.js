import Logger from "../logger.js";
import removeUndefined from "../utils/removeUndefined.js";
import nanoid from "nanoid-esm";

/**
 * 400 Bad Request
 * @extends Error
 * @param {string} message Error message
 * @param {...object} data Should contain `origin`. Can override `id`. Additional data can be added as needed.
 */
class BadRequestError extends Error {
  constructor(message, ...data) {
    super(message);
    this.name = "Bad Request";
    this.data = removeUndefined({
      id: data?.id || nanoid(),
      origin: data?.origin || "octo",
      status: 400,
      ...data,
    });

    Logger.error(`${this.data.origin}`, "octo", `${this.data.id}`, `${message}`);
    if (this.stack) {
      Logger.error(`${this.data.origin}`, "octo", `${this.data.id}`, `${this.stack}`);
    }
  }
}

//module.exports = BadRequestError;
export default BadRequestError;
