const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const path = process.argv[2];
  let response = 'This is the list of our students\n';

  try {
    const studentsData = await countStudents(path);
    response += studentsData;
  } catch (error) {
    response += error.message;
  }
  res.send(response);
});

app.listen('1245');

module.exports = app;
