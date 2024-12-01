const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    const filePath = process.argv[2];

    try {
      const studentsByField = await readDatabase(filePath);
      const fields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      let output = 'This is the list of our students\n';
      fields.forEach((field) => {
        const students = studentsByField[field];
        output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      response.status(200).send(output.trim());
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const filePath = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsByField = await readDatabase(filePath);

      const students = studentsByField[major];
      return response.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
