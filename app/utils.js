// utils.js

export function getCampusById(campusList, id) {
	return campusList.find((campus) => {
		return campus.id === id;
	});
}

export const updateIds = {
	ID: 1,
	FIRST_NAME: 2,
	LAST_NAME: 3,
	EMAIL: 4,
	GPA: 5,
	CAMPUS: 6
};