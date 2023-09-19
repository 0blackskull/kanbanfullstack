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
  // password : null,
  database: 'sprintboard',
  multipleStatements: true
});

connection.connect(function (error) {
    if (error) {
        console.log("Error connecting");
        console.log(error);
        // throw error;
    }
    else console.log("Database connection Successful!");
});

app.use(cors());
app.use(express.static('js'));

const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

const options = {
    hostname: url,
    path: '/',
    method: 'GET'
}

// In express
app.get('/', (req, res) => {
    // res.send('Hello World');
    // res.sendFile(path.dirname('/home/blackskull/Public/ReactJS/kanban/kanban-quicksell/build/index.html'));
    res.sendFile(path.join(path.dirname('/home/blackskull/Public/ReactJS/kanban/kanban-quicksell/build/index.html'), 'index.html'))
});

//SELECT tickets.id, tickets.title, tickets.tag, tickets.userId, status.statusString, tickets.priority FROM tickets LEFT JOIN status ON tickets.status = status.statusId

app.get('/tickets', (req, res) => {
    // Call mysql query
    // Send data 
    // connection.query("SELECT tickets.*, users.* FROM tickets JOIN users on tickets.userId = users.userId", function (err, result, fields) {
        connection.query("SELECT tickets.id, tickets.title, tickets.tag, tickets.userId, status.statusString, tickets.priority FROM tickets LEFT JOIN status ON tickets.status = status.statusId; SELECT * FROM users;", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        // result.forEach(element => {
        //     element.status = "Done"
        //     element.priority = "Urgent"
        // });
        res.json({"tickets":result[0], "users": result[1]});
      });
    // res.json({"tickets":[{"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},{"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},{"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},{"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},{"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},{"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},{"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},{"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},{"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},{"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}],"users":[{"id":"usr-1","name":"Anoop sharma","available":false},{"id":"usr-2","name":"Yogesh","available":true},{"id":"usr-3","name":"Shankar Kumar","available":true},{"id":"usr-4","name":"Ramesh","available":true},{"id":"usr-5","name":"Suresh","available":true}]})
})
// '^/' Starting with '/'
// '/$' Ending with '/'
// '^/$/file2.html' Same response for /file2.html as well

// Used to Create server without express
// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log(`${req.url} and ${req.method}`);
//     console.log(res);
// });


// 3 Make server listen on the defined port
//   Following line is always at the end of the file
//   Server was changed to app in express
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(path.dirname('/home/blackskull/Public/ReactJS/kanban/kanban-quicksell/build/index.html'));
});

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })
