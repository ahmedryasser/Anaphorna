const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Import models
const Patient = require('./patient');  // Assuming the patient model file is patient.js

mongoose.connect('mongodb://localhost:8080/PatientLog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

// Route to get all patients
app.get('/api/patients', async (req, res) => {
  try {
    const patients = await Patient.find({});
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
