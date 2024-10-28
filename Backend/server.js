const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Replace with your MySQL username
  password: '',      // Replace with your MySQL password
  database: 'mentalhealth'  // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1);  // Exit the app if the connection fails
  } else {
    console.log('Connected to the MySQL database');
  }
});

// Signup Route
app.post('/signup', async (req, res) => {
  const { name, mail, phone, gender, religion, dob, nationality, location, password } = req.body;

  if (!name || !mail || !password) {
    return res.status(400).send('Missing required fields');
  }

  const hashedPassword = await bcrypt.hash(password, 10);  // Hash the password

  const query = 'INSERT INTO users (name, mail, phone, gender, religion, dob, nationality, location, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, mail, phone, gender, religion, dob, nationality, location, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Database error');
    }
    res.send('User registered successfully');
  });
});

// Login Route with Logging
app.post('/login', (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    return res.status(400).send('Missing email or password');
  }

  const query = 'SELECT * FROM users WHERE mail = ?';
  db.query(query, [mail], async (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Database error');
    }
    
    if (result.length > 0) {
      const user = result[0];

      // Compare the hashed password with the provided password
      const isMatch = await bcrypt.compare(password, user.password);
      
      if (isMatch) {
        // Save login data in logins table
        const loginQuery = 'INSERT INTO logins (user_id, login_time) VALUES (?, NOW())';
        db.query(loginQuery, [user.id], (loginErr) => {
          if (loginErr) {
            console.error('Error saving login data:', loginErr);
            return res.status(500).send('Error saving login data');
          }
          res.status(200).send('Login successful');
        });
      } else {
        res.status(401).send('Invalid email or password');
      }
    } else {
      res.status(401).send('Invalid email or password');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log("Listening on port " + port);
});
