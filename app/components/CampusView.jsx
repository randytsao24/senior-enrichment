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
import { deleteCampus } from '../reducers/campuses';
import { deleteStudent } from '../reducers/students';

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
		    		<RaisedButton 
		    			label="Delete Campus"
		    			backgroundColor={styles.deleteButton.backgroundColor}
		    			disabled={
		    				campusStudents.length > 0 ? true : false
		    			}
		    			onClick={props.handleDeleteButtonClick}/>
		      </div>
		    </CardActions>
		    <Table selectable={false}>
				<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
					<TableRow>
              <TableHeaderColumn 
              	colSpan="4" 
              	tooltip="Student List" 
              	style={{textAlign: 'center'}}>
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
		    					<NavLink style={styles.link} to={`/students/${student.id}`}>
		    						{student.name}
		    					</NavLink>
		    				</TableRowColumn>
		    				<TableRowColumn>
		    					<NavLink style={styles.link} to={`/students/${student.id}`}>
		    						{student.id}
		    					</NavLink>
		    				</TableRowColumn>
		    				<TableRowColumn>
		    					<RaisedButton 
				        		label='DELETE'
				        		backgroundColor={styles.deleteButton.backgroundColor} 
				        		onClick={function() {
				        			store.dispatch(deleteStudent(student.id));
				        		}}>
			        		</RaisedButton>
			        		<UpdateFieldDialog 
			        			buttonLabel='Transfer'
					    			studentId={student && student.id}
					    			campusId={student && student.campusId}
					    			campuses={props.campuses}
					    			selection={updateIds.CAMPUS} />
		    				</TableRowColumn>
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

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleDeleteButtonClick: (event) => {
			dispatch(deleteCampus(Number(ownProps.match.params.campusId), ownProps.history));
		}
	};
};

const CampusViewContainer = connect(mapStateToProps, mapDispatchToProps)(CampusView);

export default CampusViewContainer;
