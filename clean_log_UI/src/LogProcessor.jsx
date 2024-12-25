import React, { useState } from "react";
import axios from "axios";
import './LogProcessor.css'; // Importing the CSS file for styling

function LogProcessor() {
  const [logContent, setLogContent] = useState("");
  const [processedLog, setProcessedLog] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle file upload
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (file && file.name.endsWith(".txt")) {
      const reader = new FileReader();

      reader.onload = () => {
        setLogContent(reader.result); // Set the file content to state
      };

      reader.onerror = () => {
        alert("Error reading the file");
      };

      reader.readAsText(file); // Read the file as text
    } else {
      alert("Please select a .txt file.");
    }
  };

  // Process the log content by sending it to the API
  const processLog = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/process-log", {
        log_content: logContent,
      });
      setProcessedLog(response.data.processed_log);
    } catch (error) {
      console.error("Error processing log:", error);
      alert("Failed to process log. Please try again.");
    }
    setLoading(false);
  };

  // Save the cleaned log to the server
  const saveLog = async () => {
    if (processedLog) {
      try {
        await axios.post("http://localhost:8000/api/save-log", {
          log_content: processedLog,
        });
        alert("Cleaned log saved successfully!");
      } catch (error) {
        console.error("Error saving log:", error);
        alert("Failed to save the cleaned log.");
      }
    }
  };

  return (
    <section className="log-processor-container">
      <h1>Log Processor</h1>
      
      {/* File upload input */}
      <div className="input-group">
        <input
          type="file"
          accept=".txt"
          onChange={handleFileUpload}
          className="input-field"
        />
      </div>
      
      <div className="input-group">
        <textarea
          placeholder="Original Log"
          value={logContent}
          onChange={(e) => setLogContent(e.target.value)}
          className="textarea"
        />
        <textarea
          placeholder="Processed Log"
          value={processedLog}
          readOnly
          className="textarea"
        />
      </div>

      <div className="actions">
        <button onClick={processLog} className="action-btn" disabled={loading}>
          {loading ? "Processing..." : "Process Log"}
        </button>
        <button onClick={saveLog} className="action-btn" disabled={loading}>
          {loading ? "Saving..." : "Save Cleaned Log"}
        </button>
      </div>
    </section>
  );
}

export default LogProcessor;
