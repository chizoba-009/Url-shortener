let mysql = require('mysql')

// create connection
let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
})

// TODO: Write an if statement that creates a new database if one doesnt exist already
// create a database if connection is established
// con.connect(function (err) {
//   if (err) throw err
//   console.log('Connected!')
//   con.query('CREATE DATABASE mydb', function (err, result) {
//     if (err) throw err
//     console.log('Database created')
//   })
// })

// create table
// con.connect(function (err) {
//   if (err) throw err
//   console.log('Connected!')
//   var sql = 'CREATE TABLE userdetails (ID int AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(60), Email VARCHAR(60), Password VARCHAR(255))'
//   con.query(sql, function (err, result) {
//     if (err) throw err
//     console.log('Table created')
//   })
// })

// TODO: Find a qay to make this work
// insert into table
con.connect(function (err) {
  if (err) throw err
  var sql = "INSERT INTO userdetails (Name, Email, Password) VALUES ('Michelle', 'Blue Village 1')"
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log('1 record inserted, ID: ' + result.insertId)
  })
})
