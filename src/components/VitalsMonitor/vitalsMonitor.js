import React, { useState, useEffect } from "react";
import "./vitalsMonitor.css";

function VitalSignsMonitor() {
  const [heartRate, setHeartRate] = useState(75);
  const [bloodPressure, setBloodPressure] = useState("120/80");
  const [respiratoryRate, setRespiratoryRate] = useState(18);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate random values within a reasonable range
      setHeartRate(Math.floor(Math.random() * 30) + 60);
      setBloodPressure(`${Math.floor(Math.random() * 20) + 100}/${Math.floor(Math.random() * 10) + 70}`);
      setRespiratoryRate(Math.floor(Math.random() * 8) + 12);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="glitch-container">
        <p>&nbsp;Heart Rate:&nbsp;{heartRate}bpm</p>
        <p>&nbsp;Blood Pressure:&nbsp;{bloodPressure}mmHg</p>
        <p>&nbsp;Respiratory Rate:&nbsp;{respiratoryRate}&nbsp;breaths/mi<span className="faulty-letter">n</span></p>
        </div>
  );
}

export default VitalSignsMonitor;
