import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegexManagement.css'; // Importing the CSS file for styling

function RegexManagement() {
  const navigate = useNavigate();
  const [regexRules, setRegexRules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch regex rules from the server
    const fetchRegexRules = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/regex');
        if (!response.ok) {
          throw new Error('Failed to fetch regex rules');
        }
        const data = await response.json();
        setRegexRules(data.rules);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRegexRules();
  }, []);

  const handleUpdate = (id) => {
    // Navigate to the update page for the selected rule
    navigate(`/update-regex/${id}`);
  };

  const handleDelete = async (id) => {
    // Ask for confirmation before deleting
    const confirmDelete = window.confirm('Are you sure you want to delete this regex rule?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:8000/api/regex/${id}`, { method: 'DELETE' });
        if (!response.ok) {
          throw new Error('Failed to delete regex rule');
        }
        setRegexRules(regexRules.filter((rule) => rule.id !== id));
      } catch (error) {
        console.error('Error deleting rule:', error);
        alert('Error deleting rule: ' + error.message);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="regex-management-container">
      <center>
        <h1>Regular Expression Management</h1>
        <button className="add-regex-btn" onClick={() => navigate('/add-regex')}>Add Regex</button>
        <table className="regex-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Regular Expression</th>
              <th>Replacement</th>
              <th><center>Actions</center></th>
            </tr>
          </thead>
          <tbody>
            {regexRules.map((rule) => (
              <tr key={rule.id}>
                <td>{rule.id}</td>
                <td><center>{rule.re_pattern}</center></td>
                <td><center>{rule.replacement}</center></td>
                <td>
                  <button className="update-btn" onClick={() => handleUpdate(rule.id)}>
                    <i className="fas fa-edit"></i> Update
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(rule.id)}>
                    <i className="fas fa-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default RegexManagement;
