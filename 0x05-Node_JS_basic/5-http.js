const http = require('http');
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

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const path = process.argv[2];

    res.write('This is the list of our students\n');
    try {
      const studentsData = await countStudents(path);
      res.write(studentsData);
      res.end();
    } catch (error) {
      res.end(error.message);
    }
  }
});

app.listen('1245');

module.exports = app;
