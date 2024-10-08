/* 
   This module processes student data from a file.
   It counts the total number of students and categorizes
   them based on their field of study (CS or SWE).
   The function is asynchronous and handles file reading 
   using promises.
*/

const fs = require('fs');

const countStudents = async (path) => {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Split data where a new line exists
  const students = data.split('\n')
    // Turn a row into an array by splitting by a ','
    .map((row) => row.split(','))
    // Skip the first row
    .filter((row) => row.length === 4 && row[0] !== 'firstname')
    // Converting into objects
    .map((row) => ({
      firstName: row[0],
      lastName: row[1],
      age: row[2],
      field: row[3].replace('\r', ''),
    }));
  // Generating the CS students
  const CS = students.filter((student) => student.field === 'CS')
    .map((student) => student.firstName);
  // Generating SWE students
  const SWE = students.filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);
  // Printing the length and convert each into a string
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
  return { students, CS, SWE };
};

module.exports = countStudents;