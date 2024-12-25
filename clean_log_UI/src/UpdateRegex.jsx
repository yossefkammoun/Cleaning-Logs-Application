import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateRegex.css'; // Importing the CSS file for styling

function UpdateRegex() {
  const { id } = useParams(); // Get the rule ID from URL
  const navigate = useNavigate();
  const [rePattern, setRePattern] = useState('');
  const [replacement, setReplacement] = useState('');

  useEffect(() => {
    // Fetch the regex rule by id
    const fetchRule = async () => {
      const response = await fetch(`http://localhost:8000/api/regex/${id}`);
      const data = await response.json();
      setRePattern(data.re_pattern);
      setReplacement(data.replacement);
    };
    fetchRule();
  }, [id]);

  const handleUpdate = async () => {
    const updatedRule = { re_pattern: rePattern, replacement: replacement };

    try {
      const response = await fetch(`http://localhost:8000/api/regex/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRule),
      });

      if (response.ok) {
        navigate('/regex-management');
      } else {
        console.error('Failed to update regex rule');
      }
    } catch (error) {
      console.error('Error updating regex rule:', error);
    }
  };

  return (
    <div className="update-regex-container">
      <h1>Update Regex Rule</h1>
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
        <button type="button" className="update-btn" onClick={handleUpdate}>Update Regex</button>
      </form>
    </div>
  );
}

export default UpdateRegex;
