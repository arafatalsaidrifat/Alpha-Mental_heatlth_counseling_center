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
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'mentalhealth', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1); // Exit the app if the connection fails
  } else {
    console.log('Connected to the MySQL database');
  }
});

// User Signup Route
app.post('/signup', async (req, res) => {
  const { name, mail, phone, gender, religion, dob, nationality, location, password } = req.body;

  if (!name || !mail || !password) {
    return res.status(400).send('Missing required fields');
  }

  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

  const query =
    'INSERT INTO users (name, mail, phone, gender, religion, dob, nationality, location, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(
    query,
    [name, mail, phone, gender, religion, dob, nationality, location, hashedPassword],
    (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Database error');
      }
      res.send('User registered successfully');
    }
  );
});

// User Login Route with Logging
app.post('/login', async (req, res) => {
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

// Doctor Signup Route
app.post('/doctor-signup', async (req, res) => {
  const { name, mail, specialization, experience, phone, password } = req.body;

  if (!name || !mail || !specialization || !experience || !phone || !password) {
    return res.status(400).send('All fields are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const query =
    'INSERT INTO medical_doctors (name, email, specialization, experience, phone, password) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, mail, specialization, experience, phone, hashedPassword], (err) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Error during doctor signup');
    }
    res.status(200).send('Doctor signup successful');
  });
});



// Doctor Login Route
app.post('/doctor-login', async (req, res) => {
  const { email, password } = req.body;

  // Validation: Check for missing fields
  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  try {
    // Fetch the doctor record by email
    const query = 'SELECT * FROM medical_doctors WHERE email = ?';
    db.query(query, [email], async (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Database error during doctor login');
      }

      if (result.length === 0) {
        return res.status(401).send('Invalid email or password');
      }

      const doctor = result[0];

      // Compare hashed password
      const isMatch = await bcrypt.compare(password, doctor.password);
      if (isMatch) {
        // Respond with success and doctor details
        res.status(200).send({ message: 'Doctor login successful', doctorId: doctor.id });
      } else {
        res.status(401).send('Invalid email or password');
      }
    });
  } catch (err) {
    console.error('Error during password comparison:', err);
    res.status(500).send('Error during doctor login');
  }
});


// Express backend route for deleting a session
app.delete('/sessions/:id', async (req, res) => {
  const sessionId = req.params.id;
  try {
    // Assuming you're using a database like MySQL or MongoDB
    const result = await db.query('DELETE FROM sessions WHERE id = ?', [sessionId]);
    if (result.affectedRows > 0) {
      res.status(200).send({ message: 'Session canceled' });
    } else {
      res.status(404).send({ message: 'Session not found' });
    }
  } catch (error) {
    console.error('Error deleting session:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});





// Fetch doctor details by email (or any identifier)
app.get('/api/doctor/details', (req, res) => {
  const doctorId = req.query.id; // or req.user.id if you're using authentication tokens
  const query = 'SELECT * FROM medical_doctors WHERE id = ?';
  db.query(query, [doctorId], (err, result) => {
    if (err) {
      console.error('Error fetching doctor details:', err);
      return res.status(500).send('Error fetching doctor details');
    }
    res.status(200).json(result[0]);
  });
});




app.get('/api/appointments/today', (req, res) => {
  const doctorId = req.query.doctorId;
  const query = 'SELECT * FROM appointments WHERE doctor_id = ? AND date = CURDATE()';
  db.query(query, [doctorId], (err, result) => {
    if (err) {
      console.error('Error fetching appointments:', err);
      return res.status(500).send('Error fetching appointments');
    }
    res.status(200).json(result);
  });
});




// Book a session
app.post('/book', (req, res) => {
  const { doctorName, session_time, patientName, contact } = req.body; // Remove patientId
  const query =
    'INSERT INTO bookings (doctor_name, session_time, patient_name, contact) VALUES (?, ?, ?, ?)';
  db.query(query, [doctorName, session_time, patientName, contact], (error) => {
    if (error) return res.status(500).send(error);
    res.status(200).send('Booking successful');
  });
});


// Get all booked sessions
app.get('/sessions', (req, res) => {
  const query = 'SELECT * FROM bookings'; // Fetch all bookings
  db.query(query, (error, results) => {
    if (error) return res.status(500).send(error);
    res.status(200).json(results); // Send results as JSON
  });
});



app.post("/ub", (req, res) => {
  const { name, mobile, email, needs, doctor, date, time } = req.body;

  const query =
    "INSERT INTO ub (name, mobile, email, needs, doctor, date, time) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(query, [name, mobile, email, needs, doctor, date, time], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ success: true, message: "Booking successful" });
  });
});

// Start the server
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
