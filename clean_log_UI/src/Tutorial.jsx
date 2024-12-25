import React from "react";

function Tutorial() {
  return (
    <section>
      <h1>Tutorial</h1>
      <table border="1">
        <thead>
          <tr>
            <th>RE Tutorial</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Start by understanding regular expression basics.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Use tools like regex101.com for testing expressions.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ensure your regex works for multiple test cases.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Tutorial;
