import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DOMAIN = process.env.DOMAIN || 'http://localhost';

export const URL = `${DOMAIN}:${PORT}`;

// Config de mysql
export const mysqlConfig = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    port: process.env.DB_PORT || 3306,
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "app-emails"
}