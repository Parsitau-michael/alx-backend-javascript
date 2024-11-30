const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const database = fs.readFileSync(path, 'utf8');
    const lines = database.split('\n').filter((line) => line.trim() !== '');

    const data = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${data.length}`);

    const fields = {};
    data.forEach((row) => {
      const firstName = row[0];
      const field = row[3];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
