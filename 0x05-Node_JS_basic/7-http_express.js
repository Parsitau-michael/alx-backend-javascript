const express = require('express');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const dataset = lines.slice(1).map((line) => line.split(','));

    const fields = {};
    dataset.forEach((row) => {
      const firstName = row[0];
      const field = row[3];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    let results = `Number of students: ${dataset.length}\n`;
    for (const [field, students] of Object.entries(fields)) {
      results += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    resolve(results.trim());
  });
});

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const path = process.argv[2];

  try {
    const studentsData = await countStudents(path);
    res.send(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen('1245');

module.exports = app;
