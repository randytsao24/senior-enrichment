// server/db/models/campus.js

const Sequelize = require('sequelize');
const db = require('../../db');

var Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: 'lol'
	},
	description: {
		type: Sequelize.TEXT
	}
});

module.exports = Campus;