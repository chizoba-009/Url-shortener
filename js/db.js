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
con.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
  var sql = 'CREATE TABLE users (ID int AUTO_INCREMENT PRIMARY KEY, Name VARCHAR(60), Email VARCHAR(60), longUrl VARCHAR(255), shortUrl VARCHAR(255))'
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log('Table created')
  })
})
