'use client';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export default function UGStudents() {
  const [projects, setProjects] = useState([]);
  // Function to sort by Duration in descending order
  const sortByDuration = (data) => {
    return data.sort((a, b) => {
      // Parse the duration to numeric values
      const durationA = a['year'];
      const durationB = b['year'];
      
      return durationB - durationA;
    });
  }
  useEffect(() => {
    // Fetch the CSV file and parse it
    fetch('/data/ugData.csv')
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true });
        const sortedData = sortByDuration(parsedData.data);
        setProjects(sortedData);
      })
      .catch((error) => console.error('Error loading CSV:', error));
  }, []);
  

  return (
    <div style={{ padding: '0 20px', fontFamily: 'Arial, sans-serif',minHeight:'70vh' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '5em',
        }}
      >
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Sr No.</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Duration</th>
            <th style={tableHeaderStyle}>Project Title</th>
            <th style={tableHeaderStyle}>Year</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{project['SrNo.']}</td>
              <td style={tableCellStyle}>{project['Name']}</td>
              <td style={tableCellStyle}>{project['Duration']}</td>
              <td style={tableCellStyle}>{project['Project title']}</td>
              <td style={tableCellStyle}>{project['year']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};