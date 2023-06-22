import chalk from "chalk";

const Logger = {
  group: (label) => {
    console.group(chalk.greenBright(`[${label}]`));
  },
  groupEnd: () => {
    console.groupEnd();
  },
  debug: (label, ...args) => {
    console.debug(chalk.cyan(`[${label}]`), chalk.cyan(...args));
  },
  warn: (label, ...args) => {
    console.warn(chalk.yellow(`[${label}]`), chalk.yellow(...args));
  },
  ok: (label, ...args) => {
    console.log(chalk.green(`[${label}]`), chalk.green(...args));
  },
  gravy: (label, ...args) => {
    console.log(chalk.green(`[${label}]`), chalk.green(...args));
  },
  log: (label, ...args) => {
    console.log(chalk.green(`[${label}]`), ...args);
  },
  info: (label, ...args) => {
    console.info(chalk.blue(`[${label}]`), chalk.blue(...args));
  },
  error: (label, ...args) => {
    console.error(chalk.red(`[${label}]`), chalk.red(...args));
  },
};

export default Logger;
