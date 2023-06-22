import express from "express";
import cors from "cors";
import loki from "lokijs";
import { octoDirectory, minecraftDirectory, checkIfInMinecraftDirectory } from "./core/io.js";
import dotenv from "dotenv";
import Logger from "./core/logger.js";

// LokiDB github: https://github.com/techfort/LokiJS

const app = express();
const db = new loki("octo");

const users = db.addCollection("users", { indices: ["email"] });
const logins = db.addCollection("logins", { indices: ["hash"] });

dotenv.config();

app.use(cors());

Logger.log("app", "Octo server starting...");
Logger.info("app", "Got env configuration");
Logger.ok("loki", "Loki ready");

Logger.group("loki collections");
db.collections.map((col) => Logger.log("", col.name));
Logger.groupEnd();

Logger.log("loki", "Making loki data global...");

const __loki = {
  users: users,
  logins: logins,
};

global.loki = __loki;

Logger.ok("loki", "Successfully added to global");

Logger.info("octo", "Octo directory", octoDirectory());
Logger.info("octo", "Minecraft directory", minecraftDirectory());
Logger.info("octo", "Is Minecraft directory?", checkIfInMinecraftDirectory());

// app.get('/api/ops', function(request, response) {
//     response.contentType('json');
//     response.json({
//         ops:
//     })
// })
