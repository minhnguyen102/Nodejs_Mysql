require('dotenv').config()
const express = require('express')
const app = express()
const Router = require("./routes/admin/index.router")
const configViewEngine = require("./config/view_engine.config")
const RouterClient = require("./routes/client/index.router")
const connection = require("./config/database.config")

// config req.body : Có 2 cách thêm 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// Cách 2
// app.use(express.json()) // for json
// app.use(express.urlencoded({ extended: true })) // for form data

// router
Router(app);
RouterClient(app);

// config view engine
configViewEngine(app);

// config static file
app.use(express.static('public'))

//dotenv
const PORT = process.env.PORT || 8080

// A simple SELECT query
// connection.query(
//   'SELECT * FROM Persons',
//   function (err, results, fields) {
//     console.log(">>> Result : ",results); // results contains rows returned by server
//   }
// );

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})