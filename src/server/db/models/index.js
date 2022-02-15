import * as mysql from "mysql";

import config from "../../config";

import Users from "../queries/users";


import Tokens from "../queries/tokens/";







const mysql = {
host: "localhost",
user: "root",
password: "password",
database: "Telewave"
};

const connection = mysql.createPool(mysqlConfig);

const query = (queries, values) => {
return new Promise((resolve, reject) => {
connection.query(queries, values, (err, results) => {
if (err) reject(err)
resolve(results)
})

})

}

export default { query, Tokens, Users }