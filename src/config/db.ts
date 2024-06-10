import { LiquibaseConfig } from "liquibase";

const mysql = require('mysql2');
const dbInfo = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'cheeseria',
  decimalNumbers: true
}

if (process.env.NODE_ENV !== 'test') {
  const LiquibaseTS = require('liquibase').Liquibase;
  const MYSQL_DEFAULT_CONFIG = require('liquibase').MYSQL_DEFAULT_CONFIG;

  const myConfig: LiquibaseConfig = {
    ...MYSQL_DEFAULT_CONFIG,
    changeLogFile: './changelog.yaml',
    url: `jdbc:mysql://${process.env.DB_HOST}:${process.env.DB_PORT}/cheeseria?createDatabaseIfNotExist=true`,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    classpath: './mysql-connector-j-8.4.0.jar'
  };

  const instTs = new LiquibaseTS(myConfig);
  instTs.update();

}

const db = mysql.createPool(dbInfo);

db.on('connection', function (connection: any) {
  console.log('DB Connection established');

  connection.on('error', function (err: any) {
    console.error(new Date(), 'MySQL error', err.code);
  });
  connection.on('close', function (err: any) {
    console.error(new Date(), 'MySQL close', err);
  });
});

export default db;
