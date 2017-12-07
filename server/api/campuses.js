// api/campuses.js

const router = require('express').Router();
const Campus = require('../db/models/campus');

// Route: /api/campuses/
// Send back a list of all campuses
router.get('/', (req, res, next) => {
	Campus.findAll()
		.then(campuses => res.json(campuses))
		.catch(next);
});

router.post('/', (req, res, next) => {
	Campus.create(req.body)
		.then(createdCampus => res.json(createdCampus))
		.catch(next);
});

module.exports = router;