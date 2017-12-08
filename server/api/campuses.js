// api/campuses.js

const router = require('express').Router();
const Campus = require('../db/models/campus');

const NAME_UPDATE = 6;
const DESCRIPTION_UPDATE = 7;
const IMAGE_UPDATE = 8;

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

router.put('/:campusId', (req, res, next) => {
	const campusId = req.params.campusId;
	const updateType = req.body.type;

	let updateObj;

	// Construct object based on selected field to update
	switch (Number(req.body.type)) {
		case NAME_UPDATE: 
			updateObj = {
				name: req.body.entry
			};
			break;
		case DESCRIPTION_UPDATE: 
			updateObj = {
				description: req.body.entry
			};
			break;
		case IMAGE_UPDATE: 
			updateObj = {
				imageUrl: req.body.entry
			};
			break;
		default:
			console.log("Couldn't parse entry type");
	}

	// Find campus by ID and update it accordingly
	Campus.findOne({
		where: {
			id: campusId
		}
	})
		.then(foundCampus => foundCampus.update(updateObj))
		.then(result => Campus.findAll())
		.then(campuses => res.json(campuses))
		.catch(next);
});

router.delete('/:campusId', (req, res, next) => {
	const campusId = Number(req.params.campusId);

	Campus.destroy({
		where: {
			id: campusId
		}
	})
		.then(result => Campus.findAll())
		.then(campuses => res.json(campuses))
		.catch(next);
});

module.exports = router;
