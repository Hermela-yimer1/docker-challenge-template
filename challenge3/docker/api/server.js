const express = require('express');
const mysql = require('mysql');

const app = express();

const connectToDatabase = () => {
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      console.log('Retrying in 5 seconds...');
      setTimeout(connectToDatabase, 5000); // Retry after 5 seconds
    } else {
      console.log('Connected to the MySQL database.');
      startServer();
    }
  });

  return db;
};

const startServer = () => {
  app.get('/api/books', (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send('Error fetching books');
        return;
      }
      res.json(results);
    });
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};

const db = connectToDatabase();
