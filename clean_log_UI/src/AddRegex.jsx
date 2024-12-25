import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRegex.css'; // Importing the CSS file for styling

function AddRegex() {
  const navigate = useNavigate();
  const [rePattern, setRePattern] = useState('');
  const [replacement, setReplacement] = useState('');

  const handleAdd = async () => {
    const newRule = { re_pattern: rePattern, replacement: replacement };

    try {
      const response = await fetch('http://localhost:8000/api/regex', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRule),
      });

      if (response.ok) {
        navigate('/regex-management');  // Redirect to the regex management page
      } else {
        console.error('Failed to add regex rule');
      }
    } catch (error) {
      console.error('Error adding regex rule:', error);
    }
  };

  return (
    <div className="add-regex-container">
      <h1>Add Regex Rule</h1>
      <form className="regex-form">
        <div className="input-group">
          <label>Regular Expression</label>
          <input
            type="text"
            value={rePattern}
            onChange={(e) => setRePattern(e.target.value)}
            placeholder="Enter regular expression"
          />
        </div>
        <div className="input-group">
          <label>Replacement</label>
          <input
            type="text"
            value={replacement}
            onChange={(e) => setReplacement(e.target.value)}
            placeholder="Enter replacement"
          />
        </div>
        <button type="button" className="add-btn" onClick={handleAdd}>Add Regex</button>
      </form>
    </div>
  );
}

export default AddRegex;
