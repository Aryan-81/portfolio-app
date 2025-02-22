'use client';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function InternshipStudents() {
  const [internships, setInternships] = useState([]);

  // Function to sort by year in descending order
  const sortByYear = (data) => {
    return data.sort((a, b) => b['Duration'].localeCompare(a['Duration']));
  };

  useEffect(() => {
    fetch('/data/internData.csv')
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true }).data;
        const sortedData = sortByYear(parsedData);
        setInternships(sortedData);
      })
      .catch((error) => console.error('Error loading CSV:', error));
  }, []);

  return (
    <div style={{ padding: '20px', minHeight: '70vh' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Internship Programs
      </Typography>
      <TableContainer component={Paper} elevation={3} style={{ maxWidth: '90%', margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#1976d2' }}>
              {['Sr No.', 'Name', 'Internship Program', 'Course', 'University', 'Duration'].map((header) => (
                <TableCell key={header} style={{ color: '#fff', fontWeight: 'bold' }}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {internships.map((internship, index) => (
              <TableRow key={index} hover>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{internship['Name']}</TableCell>
                <TableCell>{internship['Internship Program']}</TableCell>
                <TableCell>{internship['Course']}</TableCell>
                <TableCell>{internship['University']}</TableCell>
                <TableCell>{internship['Duration']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
