"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const pool = promise_mysql_1.default.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'ribbitdary',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306
});
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});
exports.default = pool;
