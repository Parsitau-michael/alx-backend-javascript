const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Link the / route to the AppController
router.get('/', AppController.getHomepage);

// Link the /students route to the StudentsController
router.get('/students', StudentsController.getAllStudents);

// Link the /students/:major route to the StudentsController
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
