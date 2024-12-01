const fs = require('fs');

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1).map((line) => line.split(','));

    const fields = {};

    students.forEach((row) => {
      const firstName = row[0];
      const field = row[3];

      if (!field || !firstName) return; // Skip invalid rows

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    resolve(fields);
  });
});

module.exports = readDatabase;
