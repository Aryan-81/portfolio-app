'use client';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function UGStudents() {
  const [projects, setProjects] = useState([]);

  // Function to sort by year in descending order
  const sortByYear = (data) => {
    return data.sort((a, b) => b['year'] - a['year']);
  };

  useEffect(() => {
    fetch('/data/ugData.csv')
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true }).data;
        const sortedData = sortByYear(parsedData);
        setProjects(sortedData);
      })
      .catch((error) => console.error('Error loading CSV:', error));
  }, []);

  return (
    <div style={{ padding: '20px', minHeight: '70vh' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Undergraduate Student Projects
      </Typography>
      <TableContainer component={Paper} elevation={3} style={{ maxWidth: '90%', margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#1976d2' }}>
              {['Sr No.', 'Name', 'Course', 'Project Title', 'Duration'].map((header) => (
                <TableCell key={header} style={{ color: '#fff', fontWeight: 'bold' }}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index} hover>
                <TableCell>{project['SrNo']}</TableCell>
                <TableCell>{project['Name']}</TableCell>
                <TableCell>{project['Course']}</TableCell>
                <TableCell>{project['Project Title']}</TableCell>
                <TableCell>{project['Duration']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
