
const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burger_db'
    });
};

connection.connect((err)=>{
    if (err){
        console.err(`connection error: ${err.stack}`);
    return;
    }
    console.log(`connected as ID ${connection.threadId}`);
});

module.exports = connection;