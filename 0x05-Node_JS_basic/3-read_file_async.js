const fs = require('fs');

module.exports = async function countStudents(path) {
  try {
    const database = await fs.promises.readFile(path, 'utf8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
