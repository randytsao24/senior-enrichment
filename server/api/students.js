// api/students.js

const router = require('express').Router();
const Student = require('../db/models/student');

// Route: /api/students/
// Send back a list of all students
router.get('/', (req, res, next) => {
	Student.findAll()
		.then(students => res.json(students))
		.catch(next);
});

module.exports = router;