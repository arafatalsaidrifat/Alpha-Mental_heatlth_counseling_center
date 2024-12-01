const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Initialize express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));  // Ensure this line is added

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Mental_Health'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Route to handle user sign-up
app.post('/signup', (req, res) => {
  const { name, email, password, phone, gender, dob, role, specialty } = req.body;

  // Check if passwords match
  if (password !== req.body['confirm-password']) {
    return res.status(400).send('Passwords do not match.');
  }

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error hashing password');
    }

    // Define the query and table based on the selected role
    let query;
    let table;

    if (role === 'patient') {
      table = 'users';
      query = 'INSERT INTO users (name, email, password, phone, gender, dob, role) VALUES (?, ?, ?, ?, ?, ?, ?)';
    } else if (role === 'doctor') {
      table = 'doctors';
      query = 'INSERT INTO doctors (name, email, password, phone, gender, dob, role, specialty) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    } else if (role === 'admin') {
      table = 'admin';
      query = 'INSERT INTO admin (name, email, password, phone, gender, dob, role) VALUES (?, ?, ?, ?, ?, ?, ?)';
    } else {
      return res.status(400).send('Invalid role');
    }

    // Insert user data into the correct table
    db.query(query, [name, email, hashedPassword, phone, gender, dob, role, specialty || ''], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error inserting user');
      }
      res.redirect('/homepage.html');  // Redirect to homepage after successful signup
    });
  });
});

// Route to handle user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Query to search in all three tables
  const query = `
    SELECT 'users' AS role, * FROM users WHERE email = ? 
    UNION
    SELECT 'doctors' AS role, * FROM doctors WHERE email = ?
    UNION
    SELECT 'admin' AS role, * FROM admin WHERE email = ?`;

  db.query(query, [email, email, email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }

    if (results.length === 0) {
      // User not found
      return res.status(404).send('User not found');
    }

    const user = results[0];

    // Compare the input password with the hashed password in the database
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error comparing passwords');
      }

      if (!isMatch) {
        // Password doesn't match
        return res.status(401).send('Invalid credentials');
      }

      // Login successful
      console.log('Login successful');
      
      // Redirect to appropriate dashboard based on role
      if (user.role === 'patient') {
        res.redirect('/patientdashboard.html');
      } else if (user.role === 'doctor') {
        res.redirect('/doctordashboard.html');
      } else if (user.role === 'admin') {
        res.redirect('/admindashboard.html');
      }
    });
  });
});

// Route to handle logout
app.get('/logout', (req, res) => {
  // Clear session or token if necessary
  // res.clearCookie('token'); // If you're using cookies to store JWT
  
  // Redirect to homepage after logout
  res.redirect('/homepage.html');
});

// Route to fetch all doctors
app.get('/doctors', (req, res) => {
  const query = 'SELECT * FROM doctors';

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error fetching doctors');
    }
    res.json(results);  // Send doctors list as JSON response
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
