const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",        
  password: "3319",
  database: "dbmsproject"
});


db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.stack);
    return;
  }
  console.log("✅ Connected to MySQL as ID " + db.threadId);
});


app.get("/", (req, res) => {
  res.send("Hello! Server is working 🚀");
});


app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("❌ SQL Error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});
app.get("/trains", (req, res) => {
  db.query("SELECT * FROM trains", (err, results) => {
    if (err) {
      console.error("❌ SQL Error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/nseats", (req, res) => {
  db.query("SELECT * FROM nseats", (err, results) => {
    if (err) {
      console.error("❌ SQL Error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/pseats", (req, res) => {
  db.query("SELECT * FROM pseats", (err, results) => {
    if (err) {
      console.error("❌ SQL Error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});
app.get("/stations", (req, res) => {
  db.query("SELECT * FROM stations", (err, results) => {
    if (err) {
      console.error("❌ SQL Error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});



app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});



app.post("/booking", (req, res) => {
  
  const { bookingid, TrainName, userrid, currentdate } = req.body;

  const sql = `
    INSERT INTO booking (userid, train_name, booking_date, booking_id)
    VALUES (?, ?, ?, ?)
  `;

  
  db.query(sql, [userrid, TrainName, currentdate, bookingid], (err, result) => {
    if (err) {
      console.error("❌ Error inserting booking:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "✅ Booking added successfully!", result });
  });
});
