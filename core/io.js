import path from "path";
import fs from "fs";

import BadRequestError from "./errors/badRequest.js";
import dirnameMonkeyPatch from "./utils/dirnameMonkeyPatch.js";

const { __dirname } = dirnameMonkeyPatch(import.meta);

const octoDirectory = () => {
  return process.cwd();
};

const minecraftDirectory = () => {
  return path.join(__dirname, "..", "..");
};

const checkIfInMinecraftDirectory = () => {
  return fs.existsSync(path.join(minecraftDirectory(), "server.properties"));
};

const getMinecraftServerFile = async (target) => {
  if (!target) throw new BadRequestError(`Target required or invalid`);
  if (!fs.existsSync(path.join(minecraftDirectory(), target))) {
    throw new BadRequestError(`Cannot find ${target}`);
  }
  return await fs.promise.readFile(path.join(minecraftDirectory(), target), "utf-8");
};

const getServerProperties = async () => {
  return await getMinecraftServerFile("server.properties");
};

const getJvmArgs = async () => {
  return await getMinecraftServerFile("user_jvm_args.txt");
};

const getBannedPlayers = async () => {
  return await getMinecraftServerFile("banned-players.json");
};

const getBannedIPs = async () => {
  return await getMinecraftServerFile("banned-ips.json");
};

const getOps = async () => {
  return await getMinecraftServerFile("ops.json");
};

const getUserCache = async () => {
  return await getMinecraftServerFile("usercache.json");
};

const getUsernameCache = async () => {
  return await getMinecraftServerFile("usernamecache.json");
};

const getEula = async () => {
  return await getMinecraftServerFile("eula.txt");
};

export {
  octoDirectory,
  minecraftDirectory,
  checkIfInMinecraftDirectory,
  getJvmArgs,
  getBannedPlayers,
  getServerProperties,
  getBannedIPs,
  getOps,
  getUserCache,
  getUsernameCache,
  getEula,
};
