import pino from "pino";
import { config } from "../config/app.config";
import { uniqueId } from "../utils/uniqueid";

const today = new Date().toLocaleDateString("pt-BR").split("/").join("");

export const logger = pino({
    level: config.LOG_LEVEL.toLowerCase(),
    name: config.LOG_NAME,
    timestamp: () => `,"time":${new Date().toLocaleString("en-AU", { timeZone: "Asia/Kolkata" })}`,
    formatters: {
        level: (label) => {
            return { level: label.toUpperCase() };
        },
    },
    transport: {
        target: "pino/file",
        options: {
            destination: `logs/${today}_${uniqueId}.log`,
            mkdir: true,
        },
    },
});