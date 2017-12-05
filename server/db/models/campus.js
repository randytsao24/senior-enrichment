// server/db/models/campus.js

const Sequelize = require('sequelize');
const db = require('../db');

var Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: 
	},
	description: {
		type: Sequelize.TEXT,
		validate: {
			min: 0.0,
			max: 4.0
		}
	}
});

module.exports = Student;