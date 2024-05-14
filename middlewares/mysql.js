const mysql=require("mysql2");

//docker run -p 3306:3306 -e MARIADB_ROOT_PASSWORD=123 mariadb

const connection = mysql.createConnection({
    database:"users",
    user:"root",
    password:"123",
    host:"localhost",
}).promise();

const query = async (sqlQuery)=>{
    const data = await connection.query(sqlQuery);
    console.log(data);
    const [rows] = data;
    return rows;
}

module.exports={
    getUsers:()=>query("Select * from logins"),
};