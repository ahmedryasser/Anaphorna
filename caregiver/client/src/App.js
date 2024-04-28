import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import sueImage from './sue.webp';
import hectorImage from './hector.webp';
// import susanIamge from './susan.webp';
import hayatoImage from './hayato.webp';
import nursePamImage from './nursepam.webp'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Patient = ({ name, imageUrl }) => {
  return (
    <div className="patient">
      <Link to={`/patient/${name.toLowerCase()}`}>
        <div className="patient-image-container">
          <img src={imageUrl} alt={name} className="patient-image" />
        </div>
        <p>{name}</p>
      </Link>
    </div>
  );
};

const Home = () => {
  const [patients, setPatients] = useState([
    // Fallback patient data
    { name: 'Sue', imageUrl: sueImage },
    { name: 'Hector', imageUrl: hectorImage },
    { name: 'Hayato', imageUrl: hayatoImage },
  ]);
  useEffect(() => {
    fetch('http://localhost:8080/patients')
      .then(response => response.json())
      .then(data => {
        setPatients(data.map(patient => ({
          name: patient._id.toString(),  // Assuming patient's name is stored under _id
          imageUrl: patient.image_id // Map correct field for the image URL
        })));
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="home">
      <h1>Welcome Caregiver</h1>
      <h2>Select a patient: </h2>
      <div className="patient-list">
        {patients.map(patient => (
          <Patient key={patient.name} name={patient.name} imageUrl={patient.imageUrl} />
        ))}
        {/* Render your plus button here for adding new patients */}
      </div>
    </div>
  );
};

const PatientPage = ({ match }) => {
  const { name } = match.params;
  return <div>{`This is the page for ${name}.`}</div>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="Login-info">
            <span>Logged in as: Nurse Pam</span>
            <img src={nursePamImage} alt="Nurse Pam" className="Profile-image" />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient/:name" element={<PatientPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
