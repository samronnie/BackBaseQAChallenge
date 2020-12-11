"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.Logger = void 0;
const log4js = require("log4js");
const fname = process.cwd() + "/logs";
class Logger {
    constructor(name) {
        this._appenders = {
            console: {
                type: 'console'
            },
            file: {
                backups: 3,
                type: 'file',
                compress: true,
                maxLogSize: 10485760,
                filename: fname + '/app.log'
            }
        };
        this._categories = {
            default: {
                level: 'INFO',
                appenders: ['console', 'file'],
            }
        };
        this._logger = log4js.configure(this._makeConfig());
        this._name = name;
    }
    _makeConfig() {
        return {
            appenders: this._appenders,
            categories: this._categories,
        };
    }
    get app() {
        return this._logger.getLogger(this._name);
    }
}
exports.Logger = Logger;
function logger(scenario, logs) {
    return __awaiter(this, void 0, void 0, function* () {
        const LoggerI = new Logger(scenario);
        const logger = LoggerI.app;
        logger.info(logs);
    });
}
exports.logger = logger;
