import React from 'react';
import { useHistory } from 'react-router-dom';

function DeleteRegex() {
  const history = useHistory();

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this regex?');
    if (confirmed) {
      // Code to delete regex (DELETE request to the API)
      history.push('/'); // Redirect to Home after deletion
    }
  };

  return (
    <div>
      <h1>Delete Regex</h1>
      <button onClick={handleDelete}>Delete Regex</button>
    </div>
  );
}

export default DeleteRegex;
