const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000; 

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'sprintboard',
  multipleStatements: true
});

connection.connect(function (error) {
    if (error) {
        console.log("Error connecting");
        console.log(error);
    }
    else console.log("Database connection Successful!");
});

app.use(cors());
app.use(express.static('js'));

const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

app.get('/tickets', (req, res) => {
    // Call mysql query
    // Send data 
      connection.query("SELECT tickets.id, tickets.title, tickets.tag, tickets.userId, status.statusString, tickets.priority FROM tickets LEFT JOIN status ON tickets.status = status.statusId; SELECT * FROM users;", function (err, result, fields) {
      if (err) throw err;
      console.log(result);

      res.json({"tickets":result[0], "users": result[1]});
    });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(path.dirname('/home/blackskull/Public/ReactJS/kanban/kanban-quicksell/build/index.html'));
});
