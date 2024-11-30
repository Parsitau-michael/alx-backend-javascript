const http = require('http');
const countStudents = require('./3-read_file_async');

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
    };
  }
});

app.listen('1245');

module.exports = app;
