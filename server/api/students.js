// api/students.js

const router = require('express').Router();
const Student = require('../db/models/student');
const Campus = require('../db/models/campus');

const FIRST_NAME_UPDATE = 1;
const LAST_NAME_UPDATE = 2;
const EMAIL_UPDATE = 3;
const GPA_UPDATE = 4;
const CAMPUS_UPDATE = 5;

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

// Update a single field for a single student
router.put('/:studentId', (req, res, next) => {
	const studentId = Number(req.params.studentId);
	const updateType = Number(req.body.type);
	let updateObj;

	console.log("studentId:", studentId);
	console.log("TYPE:", req.body.type);

	// Construct object based on selected field to update
	switch (Number(req.body.type)) {
		case FIRST_NAME_UPDATE: 
			updateObj = {
				firstName: req.body.entry
			};
			break;
		case LAST_NAME_UPDATE: 
			updateObj = {
				lastName: req.body.entry
			};
			break;
		case EMAIL_UPDATE: 
			updateObj = {
				email: req.body.entry
			};
			break;
		case GPA_UPDATE: 
			updateObj = {
				gpa: parseFloat(req.body.entry)
			};
			break;
		case CAMPUS_UPDATE: 
			updateObj = {
				campusId: Number(req.body.entry)
			};
			break;
		default:
			console.log("wtf?");
	}

	console.log('updateObj', updateObj);

	if (updateType !== CAMPUS_UPDATE) {
		// Find student with given ID and then update selected field
		Student.findOne({
			where: {
				id: studentId
			}
		})
			.then(foundStudent => foundStudent.update(updateObj))
			.then(result => Student.findAll())
			.then(students => res.json(students))
			.catch(next);
	} else {
		let newCampusId = Number(req.body.entry);
		let transferStudent;

		// Handle campus updating
		Student.findOne({
			where: {
				id: studentId
			}
		})
			.then(foundStudent => {
				transferStudent = foundStudent;

				return Campus.findOne({
					where: {
						id: newCampusId
					}
				})
			})
			.then(foundCampus => transferStudent.setCampus(foundCampus))
			.then(result => Student.findAll())
			.then(students => res.json(students))
			.catch(next);
	}
});

module.exports = router;
