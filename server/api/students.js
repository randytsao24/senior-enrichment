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

router.post('/', (req, res, next) => {
	Student.create(req.body)
		.then(createdStudent => res.json(createdStudent))
		.catch(next);
});

module.exports = router;