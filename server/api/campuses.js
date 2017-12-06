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

module.exports = router;