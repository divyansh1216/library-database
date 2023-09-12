const express = require('express');
const yup = require('yup');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const librarySchema = yup.object().shape({
    cardnumber: yup.string(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    status: yup.string(),
});

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'dipu3635',
    database: 'library',
});

connection.connect((error) => {
    if (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
    } else {
        console.log('Connected to the database');
    }
});
app.get('/Users', (req, res) => {
    connection.query('SELECT * FROM Users', (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
});
app.get('/Users/:cardnumber', (req, res) => {
  const cardnumber = req.params.cardnumber; // Use req.params.cardnumber to access the route parameter
  connection.query('SELECT * FROM Users WHERE cardnumber = ?', [cardnumber], (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          if (results.length > 0) {
              res.json(results[0]);
          } else {
              res.status(404).json({ error: 'User not found' });
          }
      }
  });
});
app.listen(8587);


