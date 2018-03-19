
const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burger_db'
});

connection.connect((err)=>{
    if (err){
        console.err(`connection error: ${err.stack}`);
    return;
    }
    console.log(`connected as ID ${connection.threadId}`);
});

module.exports = connection;