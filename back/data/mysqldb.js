import mysql from 'mysql2/promise';

import { mysqlConfig } from "../config/config.js";

// Normalmente se llama db pero como vamos a trabajar con distintas bases de datos, la llamamos mysqldb
const mysqldb = await mysql.createConnection(mysqlConfig);

export default mysqldb;