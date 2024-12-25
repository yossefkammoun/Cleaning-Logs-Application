import React from 'react';
import './Home.css'; // Importing the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Regex Management App</h1>
      <p className="home-description">
        This user interface provides an intuitive way to clean and process text logs. By leveraging the power of Regular Expressions (RE), users can easily define and apply patterns to extract, modify, or remove specific information from raw log data. This streamlined approach enhances log readability, facilitates efficient analysis, and enables valuable insights to be quickly gleaned from potentially overwhelming volumes of log entries.
      </p>
      
      <div className="key-features">
        <h2>Core Functionality</h2>
        <ul>
          <li>Cleaning and processing text logs using Regular Expressions (RE).</li>
          <li>Improved log readability for easier understanding.</li>
          <li>Simplified analysis and faster insights from log data.</li>
        </ul>
      </div>

      <div className="audience-target">
        <h2>Target Audience</h2>
        <p>This tool is designed for users who work with text logs and require efficient data cleaning, such as professionals in cybersecurity, system administration, and data science.</p>
      </div>
    </div>
  );
}

export default Home;
