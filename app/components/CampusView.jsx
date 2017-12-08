// components/CampusView.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {
	Card, 
	CardActions, 
	CardHeader, 
	CardMedia, 
	CardTitle, 
	CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import UpdateFieldDialog from './UpdateFieldDialog';
import { updateIds, styles } from '../utils';

function CampusView(props) {

	const campusId = Number(props.match.params.campusId);
	const campusStudents = props.students.filter((student) => {
		return student.campusId === campusId;
	});
	const selectedCampus = props.campuses.find((campus) => {
		return campus.id === campusId;
	});

	return ( 
		<div>
			<Card>
				<CardHeader
		      title={selectedCampus && selectedCampus.name}
		      subtitle="Campus Information"
		      avatar={selectedCampus && selectedCampus.imageUrl}
		    />
		    <CardText>{selectedCampus && selectedCampus.description}</CardText>
		    <CardActions>
		    	<div style={styles.buttonDiv}>
		    		<UpdateFieldDialog 
		    			campusId={selectedCampus && selectedCampus.id}
			    		selection={updateIds.CAMPUS_NAME}
		    			buttonLabel='Edit Campus Name'/>
		    		<UpdateFieldDialog 
		    			campusId={selectedCampus && selectedCampus.id}
			    		selection={updateIds.CAMPUS_DESCRIPTION}
		    			buttonLabel='Edit Campus Description'/>
		    		<UpdateFieldDialog 
		    			campusId={selectedCampus && selectedCampus.id}
			    		selection={updateIds.CAMPUS_IMAGE}
		    			buttonLabel='Edit Campus Image'/>
		      </div>
		    </CardActions>
		    <Table selectable={false}>
				<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
					<TableRow>
              <TableHeaderColumn colSpan="4" tooltip="Student List" style={{textAlign: 'center'}}>
                Student List for {selectedCampus && selectedCampus.name}
              </TableHeaderColumn>
            </TableRow>
		      <TableRow>
		        <TableHeaderColumn>#</TableHeaderColumn>
		        <TableHeaderColumn>Name</TableHeaderColumn>
		        <TableHeaderColumn>Student ID</TableHeaderColumn>
		        <TableHeaderColumn>Options</TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
		    <TableBody displayRowCheckbox={false}>
		    {
		    	campusStudents && campusStudents.map((student, index) => {
		    		return (
		    			<TableRow key={student.id}>
		    				<TableRowColumn>{index + 1}</TableRowColumn>
		    				<TableRowColumn>
		    					<NavLink to={`/students/${student.id}`}>
		    						{student.name}
		    					</NavLink>
		    				</TableRowColumn>
		    				<TableRowColumn>
		    					<NavLink to={`/students/${student.id}`}>
		    						{student.id}
		    					</NavLink>
		    				</TableRowColumn>
		    				<TableRowColumn>X</TableRowColumn>
		    			</TableRow>
		    		);
		    	})
		    }
		    </TableBody>
			</Table>
			</Card>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		campuses: state.campuses,
		students: state.students
	};
};

const CampusViewContainer = connect(mapStateToProps)(CampusView);

export default CampusViewContainer;
